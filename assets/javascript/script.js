document.getElementById('start-game').addEventListener('click', startGame);

/**
 * This function runs the intial sequence to start the game on click of the start-game button, from here the change question 
 * function will take over to populate the HTML from the questions.js file each time an 
 * answer is selected
 */
function startGame() {
    document.getElementById('rules-container').style.display = 'none';
}
/**
 * This function changes the question when the customer selects an option after starting the game.
 */
function changeQuestion() {

}
/**
 * This function will push integers to the score container based on the key-value pairs in the questions.js file.
 */
function tallyScore(){

}
/**
 * This function assesses the user's score when they complete the final scenario and will display the results 
 * aswell as some written feedback based on the score bracket they achieve. The divs this function displays 
 * will also have a a button contained within to prompt the user to play again.
 */
function assessScore(){

}