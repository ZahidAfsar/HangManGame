// someone thinks of a word and someone keep it a secrete
// we will display a series of underscores depending on the length of the word.
//each turn the player will guess one letter from the word.
//if guess is correct display lette rin the blank word.
//if incorrect we draw a piece of th ehangman or tell user they have x amount of guesses.
//add incorreect guess to a div.
//start button.
// replay button.
// well need an id for
// start button
// replay button
// secret word
// wrong guesses
// hangman
// guess/input
//id section
let startBtn = document.getElementById("startBtn");
let replayBtn = document.getElementById("replayBtn");
let secretWord = document.getElementById("secretWord");
let wrongGuesses = document.getElementById("wrongGuesses");
let HangMan = document.getElementById("HangMan");
let userInput = document.getElementById("userInput");
//varibles
//random word will be for our api call
//wrong guess will be the users incorrect input
//displayed word will be for ther correct input
let randomWord = "";
let wrongGuess = "";
let displayedWord = [];
let guesses = 0;
let maxGuesses = 5;
startBtn.addEventListener('click', function () {
    // call api function
    ApiCall();
})
restartBtn.addEventListener('click', function (e) {
    resetGame();
})
function resetGame() {
    randomWord = "";
    wrongGuess = "";
    displayedWord = [];
    guesses = 0;
    wrongGuess.textContent = "";
    secretWord.textContent = "[secret word]";
    userInput.readOnly = true;
    HangMan.textContent = "[HangMan / Guesses left]"
    userInput.value = "";
}
function ApiCall() {
    //we initiate fecth request from our random word api
    fetch('https://random-word-api.herokuapp.com/word')
        .then((response) => {
            // were gonna use the .json() method to parse into json data
            return response.json()
        })
        .then((data) => {
            //console log the data
            console.log(data[0]);
            startGame(data[0]);
        })
}
function startGame(word) {
    displayedWord = [];
    randomWord = word;
    //now we have to change our display word to have underscores for the lenght of our random word
    for (let i = 0; i < randomWord.length; i++) {
        displayedWord[i] = "_"
    }
    //we will update our "game start"
    updateGameStart();
    userInput.readOnly = false;
}
function updateGameStart() {
    secretWord.textContent = displayedWord.join(" ");
    HangMan.textContent = `Guesses left ${guesses} / ${maxGuesses}`;
}
userInput.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        let guess = userInput.value.toLowerCase();
        //check if the users guess is included in our secret word
        if (randomWord.includes(guess)) {
            //now that we know that guess is included in my word now we have to figure out what index its in
            for (let i = 0; i < randomWord.length; i++) {
                if(randomWord[i] === guess){
                    displayedWord[i] = guess;
                }
            }
        }else{
            wrongGuess += guess
            wrongGuesses.textContent = wrongGuess;
            guesses++;
        }
        updateGameStart();
        userInput.value = "";
        gameEnd();
    }
})
function gameEnd(){
    //checking if user guesses = to max guesses lose
    //check if our secre word = dislpayed  win
    if(guesses === maxGuesses){
        alert(`you lose your word was ${randomWord}`);
        resetGame()
    }else if(displayedWord.join("") === randomWord){
        alert(`hey you've won your guess is ${randomWord}`)
        resetGame();
    }
}