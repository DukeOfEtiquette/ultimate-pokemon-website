'use strict';

console.log("hello, world");

var myVariableName = "Hello, World!";
console.log(myVariableName); //excpeted output: Hello, World!

myVariableName = "no, goodbye world";
console.log(myVariableName); //expected output: no, goodbye world 

var promptQuestion = "What is the best starter pokemon?";
var response = prompt(promptQuestion);
console.log(response);

var alertMessage;
var color;// declare variable

if (response === "Squirtle") {
    color = "lightblue";
} else if (response === "Bulbasaur") {
    color = "lightgreen";
} else if (response === "Charmander") {
    color = "coral";
} else {
    color = "grey";
    response = "Unown"
}

document.write("<h2>" + response + "</h2>");
document.write("<img src=\"images/" + response + ".png\">");
document.write("<p>" + response + " is the coolest!</p>");

document.getElementById("content").style.backgroundColor = color;
