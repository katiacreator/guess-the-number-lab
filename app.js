const game = {
  title: "Guess the Number!",
  biggestNum: 5,
  smallestNum: 1,
  secretNum: null,
  play: function () {
    this.secretNum =
      Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
      this.smallestNum;
  },
};
//Assign the secret number before prompt
game.play();
console.log(game.secretNum);

// prompt to enter their guess
/* ### variables to create
- guess, guessArray, guess is updated to result of prompt; prevGuess is guessArray[guessArray.length - 1] , numGuesses = guessArray.length, guessString, and the following 
### alert template literals
- tooLowAlert = `${prevGuess} is too low. you've guessed ${guessString}.`
- tooHighAlert = `${prevGuess} is too high. you've guessed ${guessString}.`
- winAlert = `Yes, ${prevGuess} was the secret number. You took ${numGuesses} guesses.`
### functions/methods to create
-while loop, prompt, if/else statment comparing guess to secret number */

let guess; //guess is updated to result of prompt
let prevGuess; // guessArray[guessArray.length - 1]
const guessArray = []; //push all prevGuesses to the array but only prevGuesses[array.length] = guess
let guessString; //guessArray.join(",")

while (guess !== game.secretNum) {
  guess = prompt(
    "Enter a number between 0 and 5 to guess the secret number!"
  );
  if (guess < game.secretNum) {
    console.log(`${guess}`);
    // prevGuess = guess
    alert(`${guess} is too low. you've guessed ${guessString}.`);
  } else if (guess > game.secretNum) {
    console.log(`${guess}`);
    //prevGuess = guess
    alert(`${guess} is too high. you've guessed ${guessString}.`);
  } else {
    console.log(`${guess}`);
    //prevGuess = guess
    alert(
      `Yes! ${guess} was the secret number! You took some guesses.`
    );
  }
}
