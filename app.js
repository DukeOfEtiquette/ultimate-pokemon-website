'use strict';

// D. R. Y.
// Don't
// Repeat
// Yourself

/* ################# OLD CODE ################ */
// Add Squirtle
// document.write("<section> \
//                     <h2>Squirtle</h2> \
//                     <img src=\"images/Squirtle.png\"> \
//                     <p>Squirtle is the coolest!</p> \
//                 </section>");

// // Add Bulbasaur
// document.write("<section>\
//                     <h2>Bulbasaur</h2> \
//                     <img src=\"images/Bulbasaur.png\"> \
//                     <p>Bulbasaur is the coolest!</p> \
//                 </section>");

// // Add Charmander
// document.write("<section> \
//                     <h2>Charmander</h2> \
//                     <img src=\"images/Charmander.png\"> \
//                     <p>Charmander is the coolest!</p> \
//                 </section>");

/* ############## REFACTORED CODE ############# */
function addPokemonToDocument(pokemonName, description) {
    if(pokemonName === "bulbasaur"){
        description = "Some unique desc for bulbasaur";
    }

    document.write("<section> \
                        <h2>" + pokemonName + "</h2> \
                        <img src=\"images/" + pokemonName + ".png\"> \
                        <p>" + pokemonName + description + ".</p> \
                    </section>");
}

function getUserPrompt(){
    // Create a message variable to be used as an ARGUMENT for the prompt() function
    var promptQuestion = "What is the best starter pokemon?";
    response = prompt(promptQuestion);
    response = response.toLowerCase();
    console.log(response);
}

// parameter: name of variable to be used INSIDE the function
function sayMessage(msg) {
    alert(msg); // msg is an argument for alert()
}

function add(a, b) {
    var result = a + b; //some work, could be anything!
    return result; //end the function with a return call
}

function setColorBasedOnUserInput(rsp) {

    if (rsp === "squirtle") {
        color = "lightblue";
    } else if (rsp === "bulbasaur") {
        color = "lightgreen";
    } else if (rsp === "charmander") {
        color = "coral";
    } else {
        color = "grey";
        rsp = "Unown"
    }
    
    // Update background color
    document.getElementById("content").style.backgroundColor = color;
}

// sayMessage("Hello from the sayMessage() function");
var foo = add(5, 2);

var response;
getUserPrompt();

var color;
setColorBasedOnUserInput(response);

addPokemonToDocument("squirtle", "is totally rad");
addPokemonToDocument("bulbasaur", "is leafy");
addPokemonToDocument("charmander", "is on fire");
