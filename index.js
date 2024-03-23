//state required libraries
const inquirer = require("inquirer");
const fs = require("fs");

//work on prompts
inquirer
  .prompt([
    {
      type: "Input",
      name: "userName",
      message: "What is your Github Username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your current email address?",
    },
    {
      type: "input",
      name: "proName",
      message: "What is your projects name?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project.",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["mit", "apache", "the unilicense"],
    },
    {
      type: "input",
      name: "dependencies",
      message: "what command should be run to install dependencies.",
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be run to run tests?",
    },
    {
      type: "input",
      name: "repoKnow",
      message: "What does the user need to know about the repo?",
    },
    {
      type: "input",
      name: "repoCont",
      message:
        "What does the user need to know about contributing to the repo?",
    },
  ])
  .then((Response) =>
    fs.writeFile("README.md", README(Response), (err) => {
      err ? console.log(err) : console.log("Generating your README....");
    })
  );

function badges(license) {
  if (license === "mit") {
    return "![Static Badge](https://img.shields.io/badge/License-MIT-_?style=flat&color=Blue)";
  } else if (license === "apache") {
    return "![Static Badge](https://img.shields.io/badge/License-Apache-_?style=flat&color=Blue)";
  } else if (license === "the unilicense") {
    return "![Static Badge](https://img.shields.io/badge/License-The_Unilicense-_?style=flat&color=Blue)";
  }
}

function README(data) {
  return `
 # ${data.proName}

 ## Description
${data.description}

 ## License
 ${badges(data.license)}

 # Table of Contents
 1. [GitHub](#Github)
 2. [Contact Me](#Contactme)
 3. [What to know](#Whattoknow)
 4. [Contribution](#Contribution)


 ## Github
 ${data.userName}

 ## Contact me
 My Email is ${data.email} feel free to contact me for any questions.


 ## What command should be run to install dependencies.
${data.dependencies}

 ## What command should be run to run tests?
${data.tests}

 ## What to know 
${data.repoKnow}

 ## Contribution
${data.repoCont}

`;
}
