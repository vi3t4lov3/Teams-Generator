const idArray = [];
const managerInfo = [
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
    ]

    module.exports = managerInfo;