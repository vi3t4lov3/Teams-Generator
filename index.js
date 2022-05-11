const inquire = require('inquirer');
const fs = require('fs');
const managerInfo = require("./src/ManagerInfo");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const engineerInfo = require("./src/EngineerInfo");
const Intern = require("./lib/Intern");
const internInfo = require("./src/InternInfo");
const render = require('./src/template');
const teamMembers = {
    manager: null,
    engineers: [],
    interns: [],
};
const idArray = [];
//create manager
function createManager() {
    inquire
    .prompt(managerInfo)
    .then((answers) => {
        const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
        );
        teamMembers.manager = manager;
        idArray.push(answers.managerId);
        createTeam();
    });
}
//create team
function createTeam() {
    inquire
    .prompt([
        {
        type: "list",
        name: "choice",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I do not want to add any more"],
        },
    ])
    .then((answers) => {
        switch (answers.choice) {
        case "Engineer":
            addEngineer();
            break;
        case "Intern":
            addIntern();
            break;
        default:
            buildTeam();
        }
    });
}
//builteam
function buildTeam() {
    fs.writeFile("dist/team.html", render(teamMembers), (err) => {
    if (err) {
        console.log(err);
    }
    });
}
//create engineer
function addEngineer() {
    inquire
    .prompt(engineerInfo)
    .then((answers) => {
        const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
        );
        teamMembers.engineers.push(engineer);
        idArray.push(answers.id);
        createTeam();
    });
}
//create intern  
function addIntern() {
    inquire
    .prompt(internInfo)
    .then((answers) => {
        const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
        );
        teamMembers.interns.push(intern);
        idArray.push(answers.id);
        createTeam();
    });
}

createManager();