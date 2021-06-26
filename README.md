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
# *********************************************************************************
#### build html boilerplate-DONE
#### html boilerplate will note what will be automatically shown vs what will be dynamically added after start 
#### build css file will colors dark grey, teal or turquoise, white, black, and maybe dark salmon
#### import google gamer font for header
#### import complimentary google font for rest of the text
#### build an app js for primary game functionality
#### -BONUS-build a reset js for optional restart functionality of removing or adding html dynamically once the game is over


## HTML to-dos not dynamic on js file
#### write a p tag for instructions on how game is played

## CSS to-dos
#### create bg-color and text-color styling for entire body of page; 
#### import google fonts mentioned above; 
#### decide on font-size for header, p, guess number, and number guessed divs; 
#### figure out flex grid for container and container items(grid-area is 6 columns by 3 rows); #### secret num box is bigger than the other two game section divs borders with a border and bg-color-blk and white tet color, 
#### number input and guessed number bg-color teal with blk text color

## JS to dos
#### create p tags for number input and guessed number 
#### create a start button 
#### the start button contains all functions of the game
#### the game.play() function defines the secret number before the player inputs a number at start of the game




#### write code that will allow the user to input a number
#### write a function/if statement that number is compared to secret num and returns a dynamically generated ${prevGuess} is too low/high or you guessed the secret number
#### write a function that updates the previous guess on the next try while also logs the previously guess number in the guessed number log div
#### write a toggle function that dynamically changes the styling of the secret Number div to reveal the secretNum once theplayer guesses correctly with p tag message congrats on guessing correctly blhblahblah
#### toggle function that dynaically changes styling of button div from start to no buttons at all after start is clicks
### funtion that dynamically changes styling of reset button from hide to show on game over
#### create reset function last

# *DRY: one toggle function call from hide to show???*
