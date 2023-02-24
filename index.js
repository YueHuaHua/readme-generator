const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions).then((data) => {
        // writes to a file in the folder path, also has handling for errors
        fs.writeFile(path + "/" + fileName, formatData(data), (err) => err ? console.log(err) : console.log('success'))
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions);
    writeToFile();
}

// function call to initialize program
init();
