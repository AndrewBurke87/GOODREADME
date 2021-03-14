// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} # ${data.username} # ${data.email} # ${data.description} # ${data.licenses} # ${data.dependancies} # ${data.test} # ${data.info} # ${data.contributions}
  
`;
}

module.exports = generateMarkdown;
