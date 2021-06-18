const inquirer = require("inquirer");
const fs = require('fs');
let location = './README.md';
let $template = "";

// Creates inquirer questions
function getInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
      },
      {
        type: "input",
        message: "Enter a description for your project.",
        name: "description"
      },
      {
        type: "input",
        message: "Enter an explanation of how people are to use the project. How does this benefit them? The purpose.",
        name: "usage"
      },
      {
        type: "input",
        message: "Who played a role in making this project? Include yourself and other contributors and partners",
        name: "People"
      },
      {
        type: "input",
        message: "what is your Github username?",
        name: "username"
      },
      {
        type: "input",
        message: "what is your email address?",
        name: "email"
      },
      {
        type: "input",
        message: "Please include the image that is locally stored ![](...). No need to add anything except the file location. '![](...)' is already included.",
        name: "image"
      }
    ])
    // Receives response from questions
    .then(function (response) {
      // Creates the template for the readme
      $template += `## Title\n\n${response.title}\n\n`;      
      $template += `## Description\n\n${response.description}\n\n`;
      $template += `## Usage\n\n${response.usage}\n\n`;
      $template += `## People\n\n${response.people}\n\n`;
      $template += `## Questions\n\nQuestions? Reach out to me here:\n\n ### Github: [github.com/${response.username}](https://github.com/${response.username})\n\n ### Email: [${response.email}](mailto:${response.email}?subject=[GitHub])\n\n`;
      $template += `## Application Image\n\n ![](${response.image})`;
      // Writes the created template to README.md file
      fs.writeFile(location, $template, function (err) {
        if (err) {
          reject(err);
          return;
        }
      });
    });

};

getInfo()