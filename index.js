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
   { type:"input",
    name:"usage",
    message:"provide instructions and examples for use"
},
        {
        type:"input",
        name:"credits",
        message:"List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",

        },
        {
            type:"input",
            name:"license",
            message:"The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
        }
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
