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
        message: "Who played a role in making this project? Include yourself and other contributors and partners",
        name: "people"
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
    ]);
    // Receives response from questions
    //
};

getInfo()
  .then (pageREADME => {
    return generate(pageREADME);
  })
  .catch(err => {
    console.log(err);
  });
