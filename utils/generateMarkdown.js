// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${data.Description}
  ${data.ProjectLink}
  ## Table of Contents
  * [Demo] (#demo)
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [License] (#license)
  * [Contributing] (#contributing)
  * [Testing] (#testing)
  * [Developer Information] (#devInfo)
  * [Credientials] (#credientials)
  
  ## <a name="demo"></a>Demo
  ${data.Demo}
  ## <a name="installation"></a>Installation
  ${data.Installation}
  ## <a name="usage"></a>Usage
  ${data.Usage}
  ## <a name="license">License</a>
  ${data.License}
  ## <a name="contributing">Contributing</a>
  ${data.Contributing}
  ## <a name="testing">Testing</a>
  ${data.Testing}
  ## <a name="devInfo">Developer Information</a>
  Feel free to contact me using the information below if you have any questions or feedback!
  <br>
  Name: ${data.DeveloperInfo1}
  <br>
  Github Link: <${data.DeveloperInfo2}>
  <br>
  Email: <${data.DeveloperInfo3}>
  ## <a name="credientials">Credientials</a>
  ${data.Credientials}
`;
}

module.exports = generateMarkdown;
