// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [
//     'What is the title of your project?',
//     'What is the description for your project?',
//     'Are there any required steps for installation?',
//     'What are the instructions for usage?',
//     'Do you have any guidelines for contributors?',
//     'What license do you want to use?',
//     'What are the instructions to test the application?',
//     'What is your GitHub username?',
//     'What is your email address?'
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description for your project?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Are there any required steps for installation?',
        },
        {
            type: 'input',
            name:'usage',
            message: 'What are the instructions for usage?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Do you have any guidelines for contributors?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to use?',
            choices: ['MIT', 'GPLv3', 'Apache', 'AGPLv3', 'Unlicense']
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the instructions to test the application?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
    ])
    .then((data) => {
        const readmeContent = markdown.generateMarkdown(data);

        fs.writeFile('README.md', readmeContent, (error) =>
            error ? console.log(error) : console.log('Successfully created readme.md file')
        );
    });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
