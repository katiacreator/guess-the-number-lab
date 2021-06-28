# guess-the-number-lab
## Pseudocode Starts here

#******************Lab Assignment Instructions*****************
## Features from lab instructions -complete these before doing anything after the star line
- Allow the player to continually be prompted to enter their guess of what the secret number is until they guess correctly.-DONE
- If the player has an incorrect guess, display an alert message that informs the player:
    - Whether their guess is too high, or too low, and…-DONE
    - A list of all the previously guessed numbers (without showing the square brackets of an array).-DONE
- If the player has guessed the secret number:
    - Display an alert message that congratulates the player and informs them of how many guesses they took.-DONE
    - End the gameplay.-DONE
### variables to create
- guess, guessArray, guess is updated to result of prompt; prevGuess is updated from guess , numGuesses = guessArray.length, guessString, and the following 
### alert template literals
- tooLowAlert = `${prevGuess} is too low. you've guessed ${guessString}.`
- tooHighAlert = `${prevGuess} is too high. you've guessed ${guessString}.`
- winAlert = `Yes, ${prevGuess} was the secret number. You took ${numGuesses} guesses. Press ok to end game and start a new game`
### functions/methods to create
-while loop, prompt, if/else statment comparing guess to secret number

# *********************************************************************************
## Bonus Game Features pseudocode starts here
