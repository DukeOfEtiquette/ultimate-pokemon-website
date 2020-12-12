// var person = prompt("Please enter your name", "Harry Potter");

// if (person != null) {
//   console.log(person);
// }

var alertMessage;
var favPokemon = prompt("What's your favorite Gen1 Starter Pokemon?");

if(favPokemon === "Squirtle"){
    alertMessage = "Excellent choice! Squirtle is good for your soul.";
}else if(favPokemon === "Charmander"){
    alertMessage = "Oh ok. You are that kid...I see.";
}else if(favPokemon === "Bulbasaur"){
    alertMessage = "Respect, but good luck...";
}else {
    alertMessage = "Dat choice maken nosa sense";
}

alert(alertMessage);