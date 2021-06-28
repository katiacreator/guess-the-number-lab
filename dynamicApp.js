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

// console.log(game.instructions);
game.guess; //guess is updated to result of html form input
//console.log(game.guess)
game.prevGuess;
game.guessArray = []; //push all prevGuesses to the guessArray
//console.log(game.guessArray)
game.guessString = game.guessArray.join(", ");
//console.log(game.guessString)
console.log(game);

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
console.log("form: ", game.form);

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

/* BUTTON SELECTORS */
//when number is submitted in input and button is clicked number will show in the prevlog box after it is add to guessArray
game.submitBtn = document.getElementById("submitBtn");
//console.log(game.submitBtn)
game.startBtn = document.getElementById("startBtn");
//console.log(game.startBtn)
game.resetBtn = document.getElementById("resetBtn");
//console.log(game.resetBtn)

/*----------------------------- Event Listeners -----------------------------*/


  


//To reset game
game.resetBtn.addEventListener("click", function () {
  console.log("resetButton is clicked");
  // game.toggle(game.p);
  // game.guessLogText = "";
  // game.guessLog.textContent = game.guessLogText;
  // game.section.forEach((section) => {
  //   game.toggle(section);
  // });
  // game.startEnd.remove(game.resetBtn);
});

// form.addEventListener("reset", init);

//To submit guess to check Input function
game.form.addEventListener("submit", function (evt) {
  evt.preventDefault(); //prevents page from reloading on input
  console.log(game.numInput.value, `submitbutton clicked`)
  // if (!isWinner) {
  //   checkGuess(parseInt(game.numInput.value));
  // }
});

/*-------------------------------- Functions --------------------------------*/

/** FUNCTIONS to be called **/
//const toggle;//toggle class from who to hide-use query selector
game.toggle = function (element) {
  element.classList.toggle("hide");
}; 

game.init = function () {
  console.log("startButton is clicked");
  game.guessLogText = "";
  game.toggle(game.p);
  game.secretNumBox.textContent = "?";
  game.guessLogText = " ";
  game.section.forEach((section) => {
    game.toggle(section);
  });
  game.startEnd.remove(game.startBtn);
  game.resetBtn.setAttribute("hidden", true);
  game.guessArray = [];
  isWinner = false;
  //Call game play function to generate secret number here
  game.play();
  //This is the secret number
  console.log(game.secretNum);
  // render();
};

//To start the game
game.startBtn.addEventListener("click", game.init)



/* game.gameOver = function () {
  game.prevGuess = game.guess;
  game.guessArray.push(game.prevGuess);
  //reveal secretnumber
  game.secretNumBox.textContent = game.secretNum;
  //change guess log text
  game.guessLogText = `Yes, ${game.guess} was the secret number! You took ${game.guessArray.length} guess(es). Press reset button to start a new game`;
  game.guessLog.textContent = game.guessLogText;
  // reveal reset button-BUG
};  */

/* game.checkInput = function () {
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

game.init = function () {
  game.toggle(game.p);
  game.secretNumBox.textContent = "?";
  game.guessLogText = " ";
  game.section.forEach((section) => {
    game.toggle(section);
  });
  game.startEnd.remove(game.startBtn);
}; */
