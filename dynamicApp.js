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
game.instructions = "Pick a number between 0-100 to reveal the secret number!"
console.log(game.instructions)
game.guess; //guess is updated to result of html form input
console.log(game.guess)
game.prevGuess; //updated from guess input
console.log(game.prevGuess)
game.guessArray = []; //push all prevGuesses to the guessArray
console.log(game.guessArray)
// game.guessString = guessArray.join(", ") 
// console.log(game.guessString)

/* //Call game play function to generate secret number here
game.play();
//This is the secret number
console.log(game.secretNum); */

/* SELECTORS */
// const header = document.getElementById("header");
// console.log(header)
let pText = document.getElementById("p").textContent;
console.log("🚀 ~ file: dynamicApp.js ~ line 33 ~ p", p)
p = game.instructions
console.log(p)

let numInputVal = document.getElementById("section-number-input").value;
const submitBtn = document.getElementById("submitBtn");
console.log(numInputVal)
console.log(numInputVal = 22)

const secretNumBoxText = document.getElementById("section-secret-number-box").textContent;
console.log(secretNumBoxText)
// const submitBtn = document.getElementById("submitBtn");
//console.log(numInputVal = 22)
// const submitBtn = document.getElementById("submitBtn");
//console.log(numInputVal = 22)
// const submitBtn = document.getElementById("submitBtn");
//console.log(numInputVal = 22)
// const submitBtn = document.getElementById("submitBtn");
//console.log(numInputVal = 22)
// const submitBtn = document.getElementById("submitBtn");
//console.log(numInputVal = 22)
/* const secretNumBox;
const numGuessLog;
//when number is submitted in input and button is clicked number will show in the prevlog box after it is addd to guessArray
const submitBtn;
const startBtn;
const resetBtn; */


/* Event Listeners */
//numBtn;//click
//startBtn;//click
//resetBtn;//click

/** FUNCTIONS to be called **/
/* 
const toggle;//toggle class from who to hide-use query selector
const checkInput;//function that pulls value from input
const gameOver;//reveals secretNumberandreveals reset btn


//entire game function lives under this function??
//<!-- game.startGame = function(){
  //guess = prompt will become checkInput function
  //change guess to game.guess
  //Step 1 -call game.play to generate the secret number
  // call game.play();
//Step 2 - call toggle function to show game section and remove startBtn and p tag
// toggle (element){
//   <!--    if (element.classList === "show") {
//     element.classList === "hide"
//   } else {
//     x.classList = "show";
//   }
// }

// } -->
// <!-- toggle (element) => (element.classList === "show") ? element.classList === "hide" : x.classList = "show"; -->

//Step 3 - create a while loop to call checkInput to get the value of numInput as game.guess
checkInput(){
    //grab the input value update it as game.guess
          //compare game.guess to game.secretNum
          // push game.guess to game.guessArray
          // dynamically show text of section-guess-array p tag = `You've entered ${guessString}`
          // on else gamewin run function toggle to show the secret num in secretNumBox(secretNumBox.textContent = `${game.secreetNum}`) and shows total number of guesses in guess log as section-guess-array p tag = `Yes! ${game.guess} was the secret number! You took ${guessArray.length} guesses. Press reset to end this game and start a new game.`
          //call function gameOver 
          //gameOver(){
              //step 1 toggle shows resetBtn
              //when resetBtn click handler runs toggle function that resets the og html settings so you can restart the game
          }

// }; -->

game.startGame ()

/* while (guess !== game.secretNum) {
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
} */
