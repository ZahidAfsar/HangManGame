//Someone thinks of a word and we keep it secret from other players
//We Will display a series of  underscores depending on the length of the word
//Each turn the player will guess on 1 letter from the word
//If guess is correct we will display the letter in the blank word
//if incorrect we draw a piece of the hangman OR tell the user they have x amount of guesses left
//Add incorrect gues to a div.
//Start Button
//Replay Button

//We will be using ID for
//Start Button
//Replay Button
//Secret Word
//Wrong guesses
//hangman
//Guess / Input

//Id Section

let startBtn = document.getElementById("startBtn");
let restartBtn = document.getElementById("restartBtn");

let secretWord = document.getElementById("secrectWord");
let wrongGuesses = document.getElementById("wrongGuesses");
let hangMan = document.getElementById("hangMan");
let userInput = document.getElementById("userInput");