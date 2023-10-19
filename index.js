const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    message: "What is your name?",
    name: "name",
  },
  {
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    message: "What is your email?",
    name: "email",
  },
  {
    type: "list",
    choices: ["JavaScript", "HTML/CSS", "Python", "Ruby", "TypeScript"],
    message: "What is your favorite coding language?",
    name: "language",
  },
];

function writeToFile(filename, data) {
  fs.writeFile(filename, generateHTML(data), (err) => {
    err ? console.log(err) : console.log("Success!");
  });
}

function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("index.txt", data);
  });
}

init();

function generateHTML(data) {
  return `Hello my name is ${data.name}! My GitHub username is ${data.username}. My favorite coding laguage is ${data.language}! You may contact me at ${data.email} Thank you!`;
}
