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
    alertMessage = "Excellent choice! Squitle is good for your soul.";
    color = "#00FF00"; //assign variable a value
} else if (response === "Bulbasaur") {
    alertMessage = "I mean...ok, sure.";
    color = "#FF0000";
} else {
    color = "#FF0000";
    alertMessage = "No, you are wrong.";
}

alert(alertMessage);

var element = document.getElementById('response-output')

element.innerText = alertMessage;
element.style.color = color; // use variable
