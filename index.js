// TODO: Include packages needed for this application
const fs = require("fs")
const {prompt} = require("inquirer")
const {writeFile} = fs.promises
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input" , 
        name: "title" ,
        message: "what is the repo title?",

    },
    {
        type:"input",
        name:"description",
        message:"what is the description of your repo?",
    },
    {
        type:"input",
        name:"installation",
        message:"what was the installation of your repo?",
    },
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    await writeFile (fileName , data)
    console.log("Jobs Done")
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await prompt(questions)
    const text = generateMarkdown(answers)
    writeToFile("dist/README.md" , text)
}

// Function call to initialize app
init();
