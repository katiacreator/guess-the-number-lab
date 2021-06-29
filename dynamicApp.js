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
console.log(game.instructions);
game.guess; //guess is updated to result of html form input
//console.log(game.guess)
// game.prevGuess;
game.guessArray = []; //push all prevGuesses to the guessArray
//console.log(game.guessArray)
game.guessString = game.guessArray.join(", ");
//console.log(game.guessString)
// console.log(game);
game.lastGuess = game.guessArray[game.guessArray.length - 1];
game.isWinner = false

/*------------------------ Cached Element References ------------------------*/

/* SELECTORS */
/* DIV/CONTENT SELECTORS */
// P tag to show/hide instructions for the game
game.p = document.getElementById("p");
console.log("game.p: ", game.p);
// to show/hide game section
game.section = document.querySelectorAll(".game-section");
//This is the form div where numInput lives
game.form = document.querySelector("form");
//console.log("form: ", game.form);

// to select the number guess
game.numInput = document.getElementById("section-number-input");
console.log(`Bug, value is: ${game.numInput.value}`); 
// to SELECT secret number Div to append secret num
game.secretNumBox = document.getElementById("section-secret-number-box");
game.secretNumBox.textContent;

//to display guesses
game.guessLog = document.getElementById("section-guess-log");
// console.log(game.guessLogText);

//to display buttons
game.startEnd = document.getElementById("section-start-end");

/* BUTTON SELECTORS FOR EVENT LISTENERS */
//when number is submitted in input and button is clicked number will show in the prevlog box after it is add to guessArray
game.submitBtn = document.getElementById("submitBtn");
//console.log(game.submitBtn)
game.startBtn = document.getElementById("startBtn");
//console.log(game.startBtn)
game.resetBtn = document.getElementById("resetBtn");
//console.log(game.resetBtn)

/*-------------------------------- Functions --------------------------------*/

/** FUNCTIONS to be called **/
//const toggle;//toggle class from who to hide-use query selector
game.toggle = function (element) {
  element.classList.toggle("hide");
};

//starts the entire app
game.init = function () {
  console.log("startButton is clicked");
  game.p.innerText = game.instructions;
  game.guessLog.textContent =
    "Psst! Hey you! Look here to see if you guessed correctly or if you guessed too low/high.";
  game.secretNumBox.textContent = "?";
  game.section.forEach((section) => {
    game.toggle(section);
  });
  game.startEnd.remove(game.startBtn);
  game.resetBtn.setAttribute("hidden", true);
  game.guessArray = [];
  
  //Call game play function to generate secret number here
  game.play();
  //This is the secret number
  console.log(`${game.secretNum} is the secret number. delete this after testing.`);
  // render();
};

//Checks to see if the number entered is valid
game.errorCheck = function () {
  game.guess = game.numInputVal;
  console.log(game.guess)
  if (isNaN(game.guess) || game.guess < 1 || game.guess > 100) {
    game.renderError("Whoops! Please enter a number from 1 to 100.");
    return; //we dont want that error guess pushed to the array!
  } else if (game.guess === game.secretNum) {
    game.isWinner = true;
  }
  game.guessArray.push(game.guess);
  game.render();
}

// compares number from input to secret number and logs that guess
game.compareInput = function () {
  game.lastGuess = parseInt(game.numInput.value);
  if (game.lastGuess < game.secretNum) {
    game.lastGuess = game.guess;
    game.guessArray.push(game.guess);
    // console.log(`${game.prevGuess}`);
    // console.log(game.guessArray);
    game.guessLog.textContent = `Oof! ${game.lastGuess} was too low. Don't forget, you've guessed ${game.guessString} so far.`;
  } else if (game.lastGuess < game.secretNum) {
    game.lastGuess = game.guess;
    game.guessArray.push(game.guess);
    // console.log(`${game.prevGuess}`);
    // console.log(game.guessArray);
    game.guessLog.textContent = `Oof! ${game.lastGuess} was too high. Don't forget, you've guessed ${game.guessString} so far.`;
  }
};

//needs to be defined before game.render/renders textxContengt of guess log div with celebratory win statement esp if they guessed in 1 try
game.renderWin = function (div) {
  div = game.secretNumBox;
  div.textContent = game.secretNum;
  game.guessArray.push(game.guess);
  game.guessLog.textContent = `Yes! ${game.lastGuess} was the secret number! You took ${game.guessArray.length} guess(es). Press reset button to see if you can do that again!`;
  if (game.guessArray.length === 1) {
    game.guessLog.textContent = `You're a wizard. You just guessed the secret number: ${game.lastGuess} in one guess! Press reset to see if you can do that again!`;
  } else {
    game.guessLog.textContent = `Congratulations! You found the secret number ${game.secretNum} in ${game.guessArray.length} guesses!`;
  }
};



//Renders the text content for the guesses log div
game.render = function () {
  if (game.guessArray.length === 1) {
    game.guessArray.push(game.guess);
    game.resetBtn.removeAttribute("hidden");
  }

  if (game.isWinner) {
    game.renderWin(div);
  } else if (
    game.lastGuess > game.secretNum ||
    game.lastGuess < game.secretNum
  ) {
    game.compareInput();
  }
};


/*----------------------------- Event Listeners -----------------------------*/
//To start the game
game.startBtn.addEventListener("click", game.init);
//posts error message in header p tag if number is not valid
game.renderError = function() {
  game.p.textContent = "error";
  game.toggle(p)
}

// game.form.addEventListener("reset", game.init);
//To reset game
game.resetBtn.addEventListener("reset", game.init);
  

//To submit guess to check Input function
game.form.addEventListener("submit", function (e) {
  game.numInputVal = parseInt(game.numInput.value)
  e.preventDefault(); //prevents page from reloading on input
  console.log(game.numInputVal, `submitbutton clicked`);
  if (!game.isWinner) {
    game.errorCheck(game.numInputVal);
  }
});










