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
    writeToFile("index.html", data);
  });
}

init();

function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./Assets/style.css">
      <title>${data.name}'s Portfolio</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  </head>
  <body>
      <header class="d-flex justify-content-center">
          <h1>${data.name}</h1>
      </header>
      <p><a class="link-opacity-100 d-flex justify-content-center m-5" href="https://github.com/${data.username}">Github Link: ${data.username}</a></p>
      <div class="mx-auto card m-5" style="width: 18rem;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${data.email}</li>
          </ul>
      </div>
      <div class="d-flex justify-content-center m">
          <p>My facorite coding language is ${data.language}</p>
      </div>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  </body>
  </html>`;
}
