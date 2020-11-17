const inquirer = require("inquirer");
const genMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "Title",
        message: "Enter the project's title:",
    },
    {
        type: "input",
        name: "projectLink",
        message: "Enter in the deployed project link:",
    },
    {
        type: "input",
        name: "Description",
        message: "Enter the project's description:",
    },
    {
        type: "input",
        name: "Installation",
        message: "Enter the project's installation instructions:",
    },
    {
        type: "input",
        name: "Usage",
        message: "Enter the project's intended use information:",
    },
    {
        type: "input",
        name: "License",
        message: "Enter license information (For help choosing a license, visit https://choosealicense.com/): ",
    },
    {
        type: "input",
        name: "Contributions",
        message: "Describe the project's contribution guidelines:",
    },
    {
        type: "input",
        name: "Testing",
        message: "Enter any project testing information:",
    },
    {
        type: "input",
        name: "developerInfo1",
        message: "Enter in your full name:",
    },
    {
        type: "input",
        name: "developerInfo2",
        message: "Enter in your gitHub profile link:",
    },
    {
        type: "input",
        name: "developerInfo3",
        message: "Enter in your email address:",
    },
    {
        type: "input",
        name: "Credientials",
        message: "List any information sources you would like to credit:",
    },
    

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        } else {
            console.log("Success!")
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {
        const genReadMe = genMarkdown(data);
        writeToFile(fileName, genReadMe);
  }).catch(error => {
    if(error.isTtyError) {
      console.log("Error! Code could not be read")
    } else {
      console.log("Success!")
    }
  });
}

// function call to initialize program
init();
