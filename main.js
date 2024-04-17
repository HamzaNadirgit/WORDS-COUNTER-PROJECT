#! /usr/bin/env node
//import the 'inquirer' module which is acommand line interface for node.js
import inquirer from "inquirer";
//declare a constant 'answers' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter your sentence to count the word:"
    }
]);
const words = answers.sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
//print the word count of the sentence to the console;
console.log(`your sentence word count is ${words.length}`);
