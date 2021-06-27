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
#### build html boilerplate-DONE
#### html boilerplate will note what will be automatically shown vs what will be dynamically added after start-DONE 
#### build css file will colors dark grey, teal or turquoise, white, black, and maybe dark salmon
#### import google gamer font for header-DONE
#### import complimentary google font for rest of the text-DONE
#### build an app js for primary game functionality-
#### -BONUS-build a reset js for optional restart functionality of removing or adding html dynamically once the game is over

# *********************************************************************************
## HTML to-dos not dynamic on js file
#### write a p tag for instructions on how game is played
##### - add a css class that shows/hide this
##### - add a toggle function that shows/hides the p tag on start or reset
#### write a numInput tag for user to input a number guess
##### - add a toggle function that shows/hides this on start or reset
##### - write code that dynamically grabs the info from the numInput tag
#### write a secretNumBox tag for where the secret number will be revealed
##### - add a css class that shows/hide this
##### - add a toggle function that shows/hides the secretNum on start, end, or reset
#### write a numGuessLog tag for where the previous guesses are displayed dynamically after put into guessArray and turned into  string
##### - write a function that pushes guess into guessArray to make the string for this
##### - add a toggle function that shows/hides this on start or reset
#### write a submitBtn tag for the user to submit the number input in the number input section
#### write a startBtn tag that will start the entire game, dynamically add all the game div and remove the start button/remove the p tag
#### write a resetBtn tag to appear at the end of the game which will reset the og html that is displayed before the game starts
#### create a toggle function to go along with the startBtn, resetBtn, and numberBtn??? if needed

#*********************************************************************************

## CSS to-dos
#### create bg-color and text-color styling for entire body of page;-DONE 
#### import google fonts mentioned above; -DONE
#### decide on font-size for header, p, guess number, and number guessed divs; -DONE
#### figure out flex grid for container and container items(grid-area is 6 columns by 3 rows); #### secret num box is bigger than the other two game section divs borders with a border and bg-color-blk and white tet color, 

#*********************************************************************************

## JS to dos
## SELECTORS TO BE CREATED
#### create header selector-DONE
#### create p selector-DONE
#### create numInput selector-DONE
#### create secretNumBox selector-DONE
#### create numGuessLog selector-DONE
#### create submitBtn selector-DONE
#### create startBtn selector-DONE
#### create resetBtn selector-BONUS

#*********************************************************************************
## EVENT LISTENERS TO BE CREATED
#### create submitBtn event listener
#### create a start button event listener
#### create a resetBtn event listener

#*********************************************************************************
## FUNCTIONS TO BE CREATED
#### the game.play() function defines the secret number before the player inputs a number at start of the game-DONE
#### the start button contains all functions of the game
#### TOGGLE FUNCTION THAT SHOW/HIDES CLASS FOR
##### **(To apply DRY philosophy make one toggle function with the element as the parameter to be toggled in the function so i dont have to create 7 toggle functions)**
##### p tag
##### numInput section
##### secretNum section
##### secretNum text
##### numGuessLog section 
##### startBtn
##### resetBTn
#### checkInput function that pulls the value of the num typed by user
##### write code that will allow the user to input a number
##### write a function/if statement that number is compared to secret num and returns a dynamically generated ${prevGuess} is too low/high or you guessed the secret number
##### write a function that updates the previous guess on the next try while also logs the previously guess number in the guessed number log div
##### write a function that ends game when correct num is guessed that reveals that secret number using the toggle function and the reset button

#*********************************************************************************
#### RESET FUNCTION-BONUS
#### uses toggle function to hide class for game section show class for p tag and startBtn

#END PSEUDOCODE

#*********************************************************************************