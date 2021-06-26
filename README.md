# guess-the-number-lab
## Pseudocode Starts here

# *leave dynamically changing html and creating CSS until game functionality is finalized*

#### build html boilerplate-DONE
#### html boilerplate will note what will be automatically shown vs what will be dynamically added after start 
#### build css file will colors dark grey, teal or turquoise, white, black, and maybe dark salmon
#### import google gamer font for header
#### import complimentary google font for rest of the text
#### build an app js for primary game functionality
#### build a reset js for optional restart functionality of removing or adding html dynamically once the game is over


## HTML to-dos not on js file
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
#### 
#### write code that will allow the user to input a number
#### write a function/if statement that number is compared to secret num and returns a dynamically generated ${prevGuess} is too low/high or you guessed the secret number
#### write a function that updates the previous guess on the next try while also logs the previously guess number in the guessed number log div
#### write a toggle function that dynamically changes the styling of the secret Number div to reveal the secretNum once theplayer guesses correctly with p tag message congrats on guessing correctly blhblahblah
#### toggle function that dynaically changes styling of button div from start to no buttons at all after start is clicks
### funtion that dynamically changes styling of reset button from hide to show on game over
#### create reset function last

# *DRY: one toggle function call from hide to show???*
