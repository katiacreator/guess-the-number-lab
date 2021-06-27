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

game.instructions = "Pick a number between 0-100 to reveal the secret number!";
//console.log(game.instructions)
game.guess; //guess is updated to result of html form input
//console.log(game.guess)
game.prevGuess;
game.guessArray = []; //push all prevGuesses to the guessArray
//console.log(game.guessArray)
game.guessString = game.guessArray.join(", ");
//console.log(game.guessString)

/* SELECTORS */
// const header = document.getElementById("header");
// console.log(header)
/* TOGGLE SELECTORS */
// P tag to show/hide instructions for the game
game.instructions = document.getElementById("p").textContent =
  "Pick a number between 0 - 100 to reveal the secret number!";
//console.log(game.instructions);
// to show/hide game section
game.section = document.querySelectorAll(".game-section");

//when number is submitted in input and button is clicked number will show in the prevlog box after it is add to guessArray
game.submitBtn = document.getElementById("submitBtn");
//console.log(game.submitBtn)
game.startBtn = document.getElementById("startBtn");
//console.log(game.startBtn)
game.resetBtn = document.getElementById("resetBtn");
//console.log(game.resetBtn)

/* DIV/CONTENT SELECTORS */
game.p = document.getElementById("p");
// to select the number guess
game.numInput = document.getElementById("section-number-input");
console.log(`Bug, value is: ${game.numInput.value}`); //BUG FIXED!!!!

// to SELECT secret number Div to append secret num
game.secretNumBox = document.getElementById("section-secret-number-box");
game.secretNumBox.textContent;

//to display guesses
game.guessLog = document.getElementById("section-guess-log");
// console.log(game.guessLogText);

//to display buttons
game.startEnd = document.getElementById("section-start-end");

/** FUNCTIONS to be called **/
//const toggle;//toggle class from who to hide-use query selector
game.toggle = function (element) {
  element.classList.toggle("hide");
};

game.gameOver = function () {
  game.prevGuess = game.guess;
  game.guessArray.push(game.prevGuess);
  //reveal secretnumber
  game.secretNumBox.textContent = game.secretNum;
  //change guess log text
  game.guessLogText = `Yes, ${game.guess} was the secret number! You took ${game.guessArray.length} guess(es). Press reset button to start a new game`;
  game.guessLog.textContent = game.guessLogText;
  // reveal reset button-BUG
};

//Call game play function to generate secret number here
game.play();
//This is the secret number
console.log(game.secretNum);

/* // game.gameGuess = function (param) {
//   game.prevGuess = game.guess;
//   game.guessArray.push(game.prevGuess);
//   // console.log(`${game.prevGuess}`);
//   // console.log(game.guessArray);
//   game.guessLog.textContent = `${game.prevGuess} was too ${param}. You've guessed ${game.guessString} so far.`;
// } */
game.checkInput = function () {
  while (game.guess !== game.secretNum) {
    game.guess = parseInt(game.numInput.value);
    if (game.guess < game.secretNum) {
      game.prevGuess = game.guess;
      game.guessArray.push(game.prevGuess);
      // console.log(`${game.prevGuess}`);
      // console.log(game.guessArray);
      game.guessLog.textContent = `${game.prevGuess} was too low. You've guessed ${game.guessString} so far.`;
    } else if (game.guess > game.secretNum) {
      game.prevGuess = game.guess;
      game.guessArray.push(game.prevGuess);
      // console.log(`${game.prevGuess}`);
      // console.log(game.guessArray);
      game.guessLog.textContent = `${game.prevGuess} was too high. You've guessed ${game.guessString} so far.`;
    } else {
      game.gameOver();
    }
  }
};

game.startGame = function () {
  game.toggle(game.p);
  game.secretNumBox.textContent = "?";
  game.guessLogText = " ";
  game.section.forEach((section) => {
    game.toggle(section);
  });
  game.startEnd.remove(game.startBtn);
};

/* Event Listeners */
//To start the game
startBtn.addEventListener("click", function () {
  game.startGame();
});

//To submit guess to check Input function
submitBtn.addEventListener("click", function () {
  game.checkInput();
});

//To reset game
resetBtn.addEventListener("click", function () {
  game.toggle(game.p);
  game.guessLogText = "";
  game.guessLog.textContent = game.guessLogText;
  game.section.forEach((section) => {
    game.toggle(section);
  });
  game.startEnd.remove(game.resetBtn);
});
