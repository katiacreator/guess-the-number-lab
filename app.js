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
//Assign the secret number before prompt
game.play();
console.log(game.secretNum);
// prompt to enter their guess

let guess
let prevGuess// equal to prevGuesses[i]
let prevGuesses = []//push all prevGuesses to the array but only prevGuesses[array.length] = guess
while (guess !== game.secretNum) {
  guess = prompt("Enter a number between 0 and 100");
  if (guess < game.secretNum) {
    console.log(`${guess}`);
    prevGuess = guess
    alert(`${guess} is too low!`);
  } else if (guess > game.secretNum) {
    console.log(`${guess}`);
    prevGuess = guess
    alert(`${guess} is too high`);
  } else {
    console.log(`${guess}`);
    prevGuess = guess
    console.log(`${guess} was the secret number!`);
  }
}
