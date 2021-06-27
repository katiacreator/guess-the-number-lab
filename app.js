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
game.instructions = "pick a number between 0-100"
console.log(game.instructions)
/* game.guess; //guess is updated to result of html form input
console.log(game.guess)
let game.prevGuess; //updated from guess input
console.log(game.prevGuess)
game.guessArray = []; //push all prevGuesses to the guessArray
console.log(game.guessArray)
game.guessString = guessArray.join(", ") 
console.log(game.guessString)
*/
//Call game play function to generate secret number here
game.play();
//This is the secret number
console.log(game.secretNum);

/* SELECTORS */
const header;
const p;
const numInput;
const secretNumBox;
const numGuessLog;
//when number is submitted in input and button is clicked number will show in the prevlog box after it is addd to guessArray
const submitBtn;
const startBtn;
const resetBtn;


/* Event Listeners */
//numBtn;//click
//startBtn;//click
//resetBtn;//click

/* Functions to be called */
/* 
const checkInput;//function that pulls value from input
const toggle;//toggle class from who to hide-use query selector
const startGame;//entire game function lives under this function??
const endGame;//reveals secretNumberandreveals reset btn
const reset;//resets all game html to OG settings */


/* let guess; //guess is updated to result of html form input
let prevGuess; //updated from guess input
const guessArray = []; //push all prevGuesses to the guessArray
let guessString = guessArray.join(", ") */
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