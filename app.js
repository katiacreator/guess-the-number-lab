/*VARIABLES*/
const game = {
  title: "Guess the Number!",
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function () {
    this.secretNum =
      Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
      this.smallestNum;
  },
};

//Call game play function to generate secret number here
game.play();
//This is the secret number
console.log(game.secretNum);

/* SELECTORS */
/* header;
p;
numInput;
secretNumBox;
numGuessLog;
numBtn;//when number is submitted in input and button is clicked number will show in the prevlog box after it is addd to guessArray
startBtn;
resetBtn; */

/* Event Listeners */
//numBtn;//click
//startBtn;//click
//resetBtn;//click

/* Functions to be called */
/* const toggle;//toggle class from who to hide-use query selector
const startGame;//entire game function lives under this function??
const endGame;//reveals secretNumberandreveals reset btn
const reset;//resets all game html to OG settings */


let guess; //guess is updated to result of html form input
let prevGuess; //updated from guess input
const guessArray = []; //push all prevGuesses to the guessArray
let guessString = guessArray.join(", ")
/* 
while (guess !== game.secretNum) {
  guess = prompt(
    "Enter a number between 0 and 100 to guess the secret number!"
  );
  if (guess < game.secretNum) {
    prevGuess = guess;
    guessArray.push(prevGuess);
    console.log(`${prevGuess}`);
    console.log(guessArray);
    alert(`${guess} is too low. you've guessed ${guessString}.`);
  } else if (guess > game.secretNum) {
    prevGuess = guess;
    guessArray.push(prevGuess);
    console.log(`${prevGuess}`);
    console.log(guessArray);
    alert(`${guess} is too high. you've guessed ${guessString}.`);
  } else {
    prevGuess = guess;
    guessArray.push(prevGuess);
    console.log(`${prevGuess}`); 
    console.log(guessArray);
    alert(`Yes! ${guess} was the secret number! You took ${guessArray.length} guesses. Press ok to end this game and start a new game.`);
  }
}
 */