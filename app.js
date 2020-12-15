'use strict';

// D. R. Y.
// Don't
// Repeat
// Yourself
// 
// source: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself

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

/*
* DESCRIPTION
*
* Adds a <section> to the page with the details of
* a given Pokemon.
*
* PARAMETERS
*
* pokemonName => Type: String
* description => Type: String
*
* REQUIREMENTS
*
* The provided pokemonName value **must** matach a file
* name in the images/ directory.
*/
function addPokemonToDocument(pokemonName, description) {

    // This conditional demonstrates our ability to
    // set a 'default' value given *some condition*
    //
    // In this case, if the pokemonName is a certain value
    // we set a unique description for that Pokemon
    if(pokemonName === "bulbasaur") {
        description = "Some unique desc for bulbasaur";
    }

    // When called, document.write() will add **any** string
    // provided as an *argument*.
    //
    // In this case, we build a long String formatted in
    // HTML markup, which the browser will *render*.
    document.write("<section> \
                        <h2>" + pokemonName + "</h2> \
                        <img src=\"images/" + pokemonName + ".png\"> \
                        <p>" + pokemonName + description + ".</p> \
                    </section>");
}

/*
* DESCRIPTION
*
* Present a Window Prompt with a provided message
* and return the user's input.
*
* PARAMETERS
*
* message => Type: String
*
* RETURN
*
* userInput => Type: String
*/
function getUserPrompt(message){
    // Call the prompt() function with the provided
    // message parameter
    //
    // Store the user's input in a variable
    var userInput = prompt(message);

    // Return the userInput variable
    return userInput;
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

var response = getUserPrompt();

var color;
setColorBasedOnUserInput(response);

addPokemonToDocument("squirtle", "is totally rad");
addPokemonToDocument("bulbasaur", "is leafy");
addPokemonToDocument("charmander", "is on fire");
