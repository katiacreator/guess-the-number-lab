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
  
  
  let guess; //guess is updated to result of prompt
  let prevGuess; 
  const guessArray = []; //push all prevGuesses to the array but only prevGuesses[array.length] = guess
  let guessString;
  
  while (guess !== game.secretNum) {
      guess = prompt(
          "Enter a number between 0 and 100 to guess the secret number!"
        );
        if (guess < game.secretNum) {
            prevGuess = guess;
            guessArray.push(prevGuess);
            console.log(`${prevGuess}`);
            console.log(guessArray);
        guessString = guessArray.join(" , ")
            alert(`${guess} is too low. you've guessed ${guessString}.`);
          } else if (guess > game.secretNum) {
              prevGuess = guess;
              guessArray.push(prevGuess);
              console.log(`${prevGuess}`);
              console.log(guessArray);
          guessString = guessArray.join(" , ")
      alert(`${guess} is too high. you've guessed ${guessString}.`);
    } else {
      prevGuess = guess;
      guessArray.push(prevGuess);
      console.log(`${prevGuess}`); 
      console.log(guessArray);
      alert(`Yes! ${guess} was the secret number! You took ${guessArray.length} guesses. Press ok to end this game.`);
      break;
    }
  }
  