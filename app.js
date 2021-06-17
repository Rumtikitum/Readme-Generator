const { writeFile } = require('./utils/generate-readme.js');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
      //---------------------------------------------------------------
        {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your title name!');
            return false;
          }
        }
      },
      //----------------------------------------------------------------
      {
        type: 'input',
        name: 'description',
        message: 'Enter a short description of your project. What was the purpose? What does it do? (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your description!');
            return false;
          }
        }
      },
      //====================================================================
      {
        type: 'confirm',
        name: 'confirmWhy',
        message: 'Would you like to share why you chose to make your project?',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information as to why you chose the project:',
        when: ({ confirmWhy }) => confirmWhy
      },
      //=====================================================================
      {
        type: 'confirm',
        name: 'confirmWhat',
        message: 'Would you like to share what you learned from this project?',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information as to what you learned from the project:',
        when: ({ confirmWhat }) => confirmWhat
      }
    ]);
  };
  
  promptUser()
    .then(pageREADME => {
      return writeFile(pageREADME);
    })
    .then(writeFileResponse => {
      console.log(writeFileResponse);
    })
    .catch(err => {
      console.log(err);
    });
  