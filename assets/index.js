// Requirements
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Function to prompt user with questions about their project,
// using the responses to generate README.md file
function init() {
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
        const readmeContent = generateMarkdown(data);

        // Function to write readme
        fs.writeFile('README.md', readmeContent, (error) =>
            error ? console.log(error) : console.log('Successfully created readme.md file')
        );
    });
}

// Calling function to prompt questions
// then generate the readme
init();
