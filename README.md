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
#### write a header h1 tag with the title of the game-DONE
#### write a p tag for instructions on how game is played-DONE
##### - add a css class that shows/hide this-DONE

#### write a numInput tag for user to input a number guess-DONE

#### write a secretNumBox tag for where the secret number will be revealed-DONE

#### write a numGuessLog tag for where the previous guesses are displayed dynamically after put into guessArray and turned into  string-DONE

#### write a submitBtn tag for the user to submit the number input in the number input section-DONE
#### write a startBtn tag -DONE
#### write a resetBtn tag -DONE

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
##### - <!-- game.startGame = function(){
  //guess = prompt will become checkInput function
  //change guess to game.guess
  //Step 1 -call game.play to generate the secret number
  // call game.play();
//Step 2 - call toggle function to show game section and remove startBtn and p tag
// toggle (element){
  <!--    if (element.classList === "show") {
    element.classList === "hide"
  } else {
    x.classList = "show";
  }
}

} -->
<!-- toggle (element) => (element.classList === "show") ? element.classList === "hide" : x.classList = "show"; -->

//Step 3 - create a while loop to call checkInput to get the value of numInput as game.guess
checkInput(){
    //grab the input value update it as game.guess
          //compare game.guess to game.secretNum
          // push game.guess to game.guessArray
          // dynamically show text of section-guess-array p tag = `You've entered ${guessString}`
          // on else gamewin run function toggle to show the secret num in secretNumBox(secretNumBox.textContent = `${game.secreetNum}`) and shows total number of guesses in guess log as section-guess-array p tag = `Yes! ${game.guess} was the secret number! You took ${guessArray.length} guesses. Press reset to end this game and start a new game.`
          //call function gameOver 
          //gameOver(){
              step 1 toggle shows resetBtn
              //when resetBtn click handler runs toggle function that resets the og html settings so you can restart the game
          }

}; -->

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