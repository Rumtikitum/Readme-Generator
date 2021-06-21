  let $template = "";
  const fs = require('fs');
  let location = './README.md';


  // export function to generate entire page
  module.exports = function answers(response) {
    //badges
    if (response.license === 'MIT') {
      $template += `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n\n`;
    } else if (response.license === 'Apache') {
      $template += `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)\n\n`;
    } else
      $template += `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n`;
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
    $template += `## License\n\nThis project is license under the ${response.license} license.\n`;
    if (response.license === 'MIT') {
      $template += `MIT License\n Copyright (c) [${response.year}] [${response.name}]\n Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.\n\n`;
    } else if (response.license === 'Apache') {
      $template += `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)\n\n`;
    } else
      $template += `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n\n`;


    // Writes the created template to README.md file
    fs.writeFile(location, $template, function (err) {
      if (err) {
        reject(err);
        return;
      }
    });
  };