// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${data.Description}
  <br>
  Livelink: ${data.ProjectLink}

  ## <a name="toc">Table of Contents</a>
  * [Installation](#installation)
  * [Guide](#guide)
  * [Testing](#testing)
  * [Developer's Information](#devInfo)
  * [Contributing](#contributing)
  * [Credientials](#credientials)
  * [License](#license)
  


  ## <a name="installation">Installation</a><sup><sup><sub>[Table of Contents](#toc)</sub></sup></sup>
  ${data.Installation}

  ## <a name="guide">Guide</a><sup><sup><sub>[Table of Contents](#toc)</sub></sup></sup>
  ${data.Guide}
  <br>
  ![](insert screenshots/gifs here)

  ## <a name="testing">Testing</a><sup><sup><sub>[Table of Contents](#toc)</sub></sup></sup>
  ${data.Testing}

  ## <a name="devInfo">Developer's Information</a><sup><sup><sub>[Table of Contents](#toc)</sub></sup></sup>
  Feel free to contact me using the information below if you have any questions or feedback!
  <br>
  Name: ${data.DeveloperInfo1}
  <br>
  [Github](https://github.com/${data.DeveloperInfo2})
  <br>
  Email: <${data.DeveloperInfo3}>

  ## <a name="contributing">Contributing</a><sup><sup><sub>[Table of Contents](#toc)</sub></sup></sup>
  ${data.Contributing}

  ## <a name="credientials">Credientials</a><sup><sup><sub>[Table of Contents](#toc)</sub></sup></sup>

  Don't forget to add and link all information sources!

  ## <a name="license">License</a><sup><sup><sub>[Table of Contents](#toc)</sub></sup></sup>
  ${data.License}
`;
}

module.exports = generateMarkdown;
