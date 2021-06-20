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
        message: "Are there any required installations to run your project? Please provide so that future developers working on the project may know.",
        name: "installations"
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
      {
        type: "input",
        message: "Please provide an 'alt text' for the image.",
        name: "fillername"
      },
    ])
    // Receives response from questions
    .then(function (response) {
      // Creates the template for the readme
      $template += `## Title\n\n${response.title}\n\n`;      
      $template += `## Description\n\n${response.description}\n\n`;
      $template += `## Installations\n\n${response.installation}\n\n`;
      $template += `## Usage\n\n${response.usage}\n\n`;
      $template += `## Credit\n\n${response.people}\n\n`;
      $template += `## Methods of Contact\n\n ### Github: [github.com/${response.username}](https://github.com/${response.username})\n\n ### Email: [${response.email}](mailto:${response.email}?subject=[GitHub])\n\n`;
      $template += `## Application Image\n\n ![${response.fillername}](${response.image})`;
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