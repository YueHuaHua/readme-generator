const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your project: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description of your project: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter any installation instructions: ',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Enter usage information:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter any contributing information:',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Enter testing instructions:',
        name: 'testing'
    },
    {
        type: 'list',
        message: 'Please select a license:',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    // writes to a file in the folder path, also has handling for errors
    return fs.writeFile(path.relative(process.cwd(), "./output/" + fileName), generateMarkdown(data), (err) => err ? console.log(err) : console.log('README file has been created ...'))
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => writeToFile('README.md', response));
}

// function call to initialize program
init();
