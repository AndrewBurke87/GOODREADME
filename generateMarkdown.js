// function to generate markdown for README
function generateMarkdown(data) {
     return `# **${data.title}** 

  # Table of Contents
     * [Project Description](#project - description)
     * [Installation](#installation)
     * [Usage](#usage)
     * [Tests](#tests)
     * [License](#license)
     * [Contributions](#contributions)
     * [Questions](#questions)

  # Github username
     ${data.username} 

  # Project Description 
     ${data.description}

  # Licenses
     ${data.licenses} 

  # Installation
     ${data.dependancies} 

  # Test
     ${data.test}  

  # Contributions
     ${data.contributions}
     
  # Questions
     If you have any questions, please contact the project owner by clicking on the email listed below. 
     ${data.email}
`;
}

module.exports = generateMarkdown;

