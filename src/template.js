  let $template = "";
  const fs = require('fs');
  let location = './README.md';


  // export function to generate entire page
  module.exports = function answers(response) {
    $template += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    $template += `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    $template += `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    // Creates the template for the readme
    $template += `### Table of Contents\n- [Title](#Title)\n- [Description](#description)\n- [Installation](#installation)\n- [Usage](#usage)\n- [Contributing](#contributing)\n- [Test](#test)\n- [Contact](#contact)\n- [Image](#image)\n- [License](#license)\n\n`;    
    $template += `## Title\n\n${response.title}\n\n`;      
    $template += `## Description\n\n${response.description}\n\n`;
    $template += `## Installation\n\n${response.installations}\n\n`;
    $template += `## Usage\n\n${response.usage}\n\n`;
    $template += `## Contributing\n\n${response.people}\n\n`;
    $template += `## Test\n\n${response.test}\n\n`;
    $template += `## Contact\n\n ### Github: [github.com/${response.username}](https://github.com/${response.username})\n\n ### Email: [${response.email}](mailto:${response.email}?subject=[GitHub])\n\n`;
    $template += `## Image\n\n ![${response.fillername}](${response.image})\n\n`;
    $template += `## License\n\nThis project is license under the ${response.license} license.`;


    // Writes the created template to README.md file
    fs.writeFile(location, $template, function (err) {
      if (err) {
        reject(err);
        return;
      }
    });
  };