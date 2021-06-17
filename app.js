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
      }
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
  
  const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New Project
  =================
  `);
  
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
      portfolioData.projects = [];
    }
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your project? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a project name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a description of the project (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you this project with? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
          type: 'input',
          name: 'link',
          message: 'Enter the GitHub link to your project. (Required)',
          validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You need to enter a project GitHub link!');
              return false;
            }
          }
        },
        {
          type: 'confirm',
          name: 'feature',
          message: 'Would you like to feature this project?',
          default: false
        },
        {
          type: 'confirm',
          name: 'confirmAddProject',
          message: 'Would you like to enter another project?',
          default: false
        }
      ])
      .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      });
  };
  
  promptUser()
    .then(promptProject)
    .then(portfolioData => {
      return generatePage(portfolioData);
    })
    .then(pageHTML => {
      return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
      console.log(writeFileResponse);
      return copyFile();
    })
    .then(copyFileResponse => {
      console.log(copyFileResponse);
    })
    .catch(err => {
      console.log(err);
    });
  