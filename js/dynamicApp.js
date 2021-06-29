/*-------------------------------- Constants --------------------------------*/
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
/*-------------------------------- Variables --------------------------------*/
let guessArray, isWinner, guessString;
/*------------------------ Cached Element References ------------------------*/

/* SELECTORS */
/* DIV/CONTENT SELECTORS */
// P tag to show/hide instructions for the game
const p = document.getElementById("p");
const instructions = "Pick a number between 0-100 to reveal the secret number!";
// to show/hide game section
const gameSection = document.querySelectorAll(".game-section");
const form = document.querySelector("form");
const numInput = document.getElementById("section-number-input");
// to SELECT secret number Div to append secret num
const secretNumBox = document.getElementById("section-secret-number-box");
//game.secretNumBox.textContent;

//to display guesses
const guessLog = document.getElementById("section-guess-log");
// console.log(game.guessLogText);

//to display buttons
const startEnd = document.getElementById("section-start-end");

/* BUTTON SELECTORS FOR EVENT LISTENERS */
//when number is submitted in input and button is clicked number will show in the prevlog box after it is add to guessArray
submitBtn = document.getElementById("submitBtn");
//console.log(game.submitBtn)
startBtn = document.getElementById("startBtn");
console.log(startBtn)
resetBtn = document.getElementById("resetBtn");
//console.log(game.resetBtn)

/*----------------------------- Event Listeners -----------------------------*/
//To start the game
startBtn.addEventListener("click", init);

//To reset game
resetBtn.addEventListener("click", init);
form.addEventListener("reset", init);

form.addEventListener("submit", function (evt) {
  evt.preventDefault(); //prevents page from reloading on input
  if (!isWinner) {
    checkGuess(parseInt(numInput.value));
  }
});
/*-------------------------------- Functions --------------------------------*/
// init();

function init() {
  p.innerText = instructions;
  guessLog.textContent =
    "Psst! Hey you! Look here to see if you guessed correctly or if you guessed too low/high.";
  secretNumBox.textContent = "?";
  gameSection.forEach((section) => {
    toggle(section);
  });
  // startEnd.remove(startBtn);
  resetBtn.setAttribute("hidden", true);
  guessArray = [];

  //Call game play function to generate secret number here
  game.play();
  console.log(game.secretNum);
  secretNum = game.secretNum;
  //This is the secret number
  console.log(`${secretNum} is the secret number. delete this after testing.`);
  isWinner = false;
  render();
}

function checkGuess(guess) {
  numInput.value = "";
  if (isNaN(guess) || guess < 1 || guess > 100) {
    renderError("Whoops! Please enter a number from 1 to 100.");
    return; //we dont want that error guess pushed to the array!
  } else if (guess === secretNum) {
    isWinner = true;
  }
  guessArray.push(guess);
  console.log(guessArray)
  render();
}

function render() {
  guessString = guessArray.join(", ");
  guessLog.textContent = guessString;
  const lastGuess = guessArray[guessArray.length - 1];
  if (guessArray.length === 1) {
    console.log(guessArray)
    guessLog.textContent = `You've just entered ${lastGuess}`;
    resetBtn.removeAttribute("hidden");
  }

  if (isWinner) {
    renderWin();
  } else if (lastGuess > secretNum || lastGuess < secretNum) {
    renderGuess(lastGuess);
  }
}

function renderError(error) {
  p.textContent = error;
}

function renderWin() {
  secretNumBox.textContent = `${secretNum}`;
  guessLog.textContent = `Yes! ${secretNum} was the secret number! You took ${guessArray.length} guess(es). Press reset button to see if you can do that again!`;
  if (guessArray.length === 1) {
    guessLog.textContent = `You're a wizard. You just guessed the secret number: ${secretNum} in one guess! Press reset to see if you can do that again!`;
  } else {
    console.log(guessArray)
    guessLog.textContent = `Congratulations! You found the secret number ${secretNum} in ${guessArray.length} guesses!`;
  }
}

function renderGuess(lastGuess) {
  if (lastGuess < secretNum) {
    guessLog.textContent = `Oof! ${lastGuess} was too low. Don't forget, you've guessed ${guessString} so far.`;
  } else if (lastGuess > secretNum) {
    guessLog.textContent = `Oof! ${lastGuess} was too high. Don't forget, you've guessed ${guessString} so far.`;
  }
}


function toggle(element) {
  element.classList.toggle("hide");
}
