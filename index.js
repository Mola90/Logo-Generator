const inquirer = require("inquirer");

const questions = [
    {
        type: "list",
        name: "Shape",
        message: "please select shape",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "colour",
        message: "please choose a logo colour",

    },
    {
        type: "input",
        name: "message",
        message: "please enter a three character message for your logo",

    },

];