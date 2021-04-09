// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');


const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please write a brief discription of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What kind of license should your project have?',
        name: 'licenses'
    },
    {
        type: 'input',
        message: 'What commands need to be run to install dependancies?',
        name: 'dependancies'
    },
    {
        type: 'input',
        message: 'What command should be run to run test?',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Would you like to allow others to contribute to this repo?',
        name: 'contributions',
        choices: [
            "Yes",
            "No"
        ]
    },
];

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        const fileName = `${response.username.toLowerCase().split('').join('')}.md`;

        writeFile(fileName, generateMarkdown({ ...response }))
    });

}

// function call to initialize program
function writeFile(fileName, response) {
    return fs.writeFileSync(path.join(__dirname, fileName), response)
}
init();
