  let $template = "";
  const fs = require('fs');
  let location = './README.md'

  // export function to generate entire page
  module.exports = function answers(response) {
    // Creates the template for the readme
    $template += `### Table of Contents\n*[Title](#Title)\n*[Description](#description)\n*[Installation](#installation)\n*[Usage](#usage)\n*[Credit](#credit)\n*[Contact](#contact)\n*[Image](#image)\n\n`;    
    $template += `## Title\n\n${response.title}\n\n`;      
    $template += `## Description\n\n${response.description}\n\n`;
    $template += `## Installation\n\n${response.installations}\n\n`;
    $template += `## Usage\n\n${response.usage}\n\n`;
    $template += `## Credit\n\n${response.people}\n\n`;
    $template += `## Methods of Contact\n\n ### Github: [github.com/${response.username}](https://github.com/${response.username})\n\n ### Email: [${response.email}](mailto:${response.email}?subject=[GitHub])\n\n`;
    $template += `## Image\n\n ![${response.fillername}](${response.image})`;
    // Writes the created template to README.md file
    fs.writeFile(location, $template, function (err) {
      if (err) {
        reject(err);
        return;
      }
    });
  };