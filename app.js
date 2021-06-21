const inquirer = require("inquirer");
const generate = require('./src/template')

// Creates inquirer questions
const getInfo = () => {
  return inquirer.prompt([
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
        message: "Would you like others to contribute to this code? If so how?",
        name: "contribute"
      },
      {
        type: "input",
        message: "How can other users test this code?",
        name: "test",
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
      },
      {
        type: "input",
        message: "Please provide an 'alt text' for the image.",
        name: "fillername"
      },
      {
        type: "checkbox",
        message: "What License would you like for this project? [Spacebar] to select or deselect. [Enter] to confirm.",
        choices: ['MIT', 'APACHE', 'GPLv3'],
        name: "license"
      },
      {
        type: "input",
        message: "What year is it that your getting this license?",
        name: "year"
      },
      {
        type: "input",
        message: "Last but not least, what is your name?",
        name: "name"
      },
    ]);
};


//initiates inquirer and handles error
getInfo()
  .then (pageREADME => {
    return generate(pageREADME);
  })
  .catch(err => {
    console.log(err);
  });
