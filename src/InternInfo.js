const idArray = [];
const internInfo = [
    {
    type: "input",
    name: "name",
    validate: (answer) => {
        if (answer !== "") {
        return true;
        }
        return "Please enter at least one character";
    },
    },
    {
    type: "input",
    name: "id",
    message: "what is the id",
    validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
        if (idArray.includes(answer)) {
            return "This id is already taken";
        } else {
            return true;
        }
        }
        return "Please enter a positive number greater than 0";
    },
    },
    {
    type: "input",
    name: "email",
    message: "what is the email",
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
    name: "school",
    message: "what is the school",
    validate: (answer) => {
        if (answer !== "") {
        return true;
        }
        return "Please enter at least one character";
    },
    },
]
module.exports = internInfo;