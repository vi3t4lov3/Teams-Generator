const inquire = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require('./src/template');
const teamMembers = {
    manager: null,
    engineers: [],
    interns: [],
};

function createManager() {
    inquirer
    .prompt([
        {
        type: "input",
        name: "managerName",
        validate: (answer) => {
            if (answer !== "") {
            return true;
            }
            return "Please enter at least one character";
        },
        },
        {
        type: "input",
        name: "managerId",
        message: "what is the team manager's id",
        validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
            return true;
            }
            return "Please enter a positive number greater than 0";
        },
        },
        {
        type: "input",
        name: "managerEmail",
        message: "what is the team manager's email",
        validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
            return true;
            }
            return "Please enter a valid email";
        },
        },
        {
        type: "input",
        name: "managerOfficeNumber",
        message: "what is the team manager's office number",
        validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
            return true;
            }
            return "Please enter a positive number greater than 0";
        },
        },
    ])
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







// const promptEmployee = (employeeInfo) => {
//     return inquire.prompt(employeeInfo);
// }

// //template the HTML
// const generateHTML = render(teamMembers);


// const init = () => {
//     promptEmployee(employeeInfo)
//     .then((answers) => fs.writeFileSync('./dist/teamTuNguyen.html', generateHTML))
//     .then(() => console.log('Successfully wrote to HTML'))
//     .catch((err) => console.error(err));
//   };
//   init();