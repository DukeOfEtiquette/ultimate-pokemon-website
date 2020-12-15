'use strict';

// D. R. Y.
// Don't
// Repeat
// Yourself
// 
// source: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself

/* ########## BEGIN FUNCTION DECLARATIONS ########## */

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
* Present a Window Prompt with a given message
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

/*
* DESCRIPTION
*
* Present an Alert Window with a given message.
*
* PARAMETERS
*
* message => Type: String
*
* NOTE
*
* Developers refer to a function like this as a 'wrapper function.'
* That is, the main purpose of 'sayMessage()' is to simply call the
* function 'alert()' with (in this case) no additional logic or
* computation.
*
* source: https://en.wikipedia.org/wiki/Wrapper_function
*
* This is useful if we want to provide validation before calling
* the subroutine. Some validation ideas:
*                             - Spellcheck
*                             - Proper upper/lower casing
*                             - Language translation
*/
function sayMessage(message) {
    alert(message);
}

/*
* DESCRIPTION
*
* Set the background color of the main content area.
* Color is determined based on value of argument provided.
*
* PARAMETERS
*
* userResponse => Type: String
*/
function setColorBasedOnUserInput(userResponse) {

    // Decalre variable that will be used
    // within this function *only*
    var color;

    // The value of userResponse will first be compared to
    // squirtle. If it is a match, then the color will be set
    // to "lightblue" and the if/else if/else chain will stop.
    //
    // If userResponse does not match 'squirtle' then it will
    // be compared to 'bulbasaur' and so on...
    //
    // If nonoe of the if/else if conditions match, then the
    // else condition will execute. This would be considered
    // the 'default' value.
    if (userResponse === "squirtle") {
        color = "lightblue";
    } else if (userResponse === "bulbasaur") {
        color = "lightgreen";
    } else if (userResponse === "charmander") {
        color = "coral";
    } else {
        color = "grey";
    }
    
    // This step requires an HTML element with an id of 'content' to
    // be present on the page, otherwise this step will throw an
    // error in your browser's developer console.
    document.getElementById("content").style.backgroundColor = color;
}

/* ########## BEGIN SCRIPT LOGIC ########## */

// sayMessage("Hello from the sayMessage() function");

// Declare variable that will be used as an argument
// when calling getUserPrompt()
var promptQuestion = "Who is the best starter pokemon?";

// According to the source comment for the function, it
// will create the prompt window with the provided argmuent
// and the user input will be returned from the funciton.
var response = getUserPrompt(promptQuestion);

// This function will set a background color based
// upon the String provided, in this case the user's
// input from the getUserPrompt() call above.
setColorBasedOnUserInput(response);

// Add some Pokemon descriptions to the page.
//
// According to the source comment for the function, the
// first argument, pokemonName, must also be the title
// of a PNG in the images/ directory.
addPokemonToDocument("squirtle", "is totally rad");
addPokemonToDocument("bulbasaur", "is leafy");

// Let's do one with variables as arguments...
var pokemonName = "charmander";
var description = "is on fire";
addPokemonToDocument(pokemonName, description);
