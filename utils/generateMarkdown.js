// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  ## Description
  ${data.description}
  ## Table of Contents
   [Installation](##Installation)
   [Usage](##Usage)
   [License](##License)
   [Contributors](##Contributors)
   [Test](##Test)
   [Questions](##Questions)
   ## Installation
   ${data.installation}
   ## Usage
   ${data.usage}
   ## License
   ${data.license}
   ## Contributors
   ${data.contributors}
   ## Test
   ${data.test}
   ## Questions
   If you have any questions feel free to contact me on [Github](http://github.com/${data.github}) or via [Email](${data.email}).
   
   
 
 `;
}

module.exports = generateMarkdown;