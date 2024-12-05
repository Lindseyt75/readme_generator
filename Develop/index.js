// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please provide a short description of your project:',
},
{
    type: 'checkbox',
    name: 'installation',
    message: 'What are the installation steps?',
    choices: [' 1. npm i inquirer@8', ' 2. npm i colors', ' 3. npm i', ' 4. node index.js'],
},
{
    type: 'input',
    name: 'usage',
    message: 'How is this project used?',
},
{
    type: 'input',
    name: 'contributing',
    message: 'What contributed and how?',
},
{
    type: 'checkbox',
    name: 'languages',
    message: 'Please provide languages used:',
    choices: [' HTML', ' CSS', ' JavaScript', ' Node.js'],
},
{
    type: 'list',
    name: 'license',
    message: 'What license is the project under?',
    choices: ['MIT License', 'Zero Clause BSD license', 'ISC license'],
},
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md created successfully!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
    const readmeContent = generateMarkdown(responses);
    writeToFile('README.md', readmeContent);
});
}

// Function to generate markdown for README
function generateMarkdown(data) {
    return `# 📖 ${data.title} 📖 #

## Description
${data.description}

## Table of Contents
- Installation
- Usage
- Contributing
- Languages
- License
- Questions

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Languages
${data.languages}

## License
This project is licensed under the ${data.license} license.

## Questions
For any questions, please reach out:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

// Function call to initialize app
init();
