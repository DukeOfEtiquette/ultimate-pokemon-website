'use strict';

var promptQuestion = "What is the best starter pokemon?";
var response = prompt(promptQuestion);
console.log(response);

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

// Add Squirtle
document.write("<section><h2>Squirtle</h2><img src=\"images/Squirtle.png\"><p>Squirtle is the coolest!</p></section>");

// Add Bulbasaur
document.write("<section><h2>Bulbasaur</h2><img src=\"images/Bulbasaur.png\"><p>Bulbasaur is the coolest!</p></section>");

// Add Charmander
document.write("<section><h2>Charmander</h2><img src=\"images/Charmander.png\"><p>Charmander is the coolest!</p></section>");

// Update background color
document.getElementById("content").style.backgroundColor = color;
