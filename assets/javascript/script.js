import {questions} from './questions.js';

let playButton = document.getElementById('start-game');
playButton.addEventListener('click', startGame);

/**
 * This function runs the intial sequence to start the game on click of the start-game button, from here the change question 
 * function will take over to populate the HTML from the questions.js file each time an 
 * answer is selected
 */
function startGame() {
    let rulesContainer = document.getElementById('rules-container');
    rulesContainer.style.display = 'none';
    let gameArea = document.getElementById('game-container');
    gameArea.style.display = 'table';
    let answerContainer = document.getElementById('answer-btn-container')
    answerContainer.style.display = 'flex';
    changeQuestionAndOptions();
}
/**
 * This loop and function changes the question when the customer selects an option after starting the game.
 */

 const answers = document.querySelectorAll('.answer-btn'); 
 answers.forEach(answer => answer.addEventListener('click', () => { changeQuestionAndOptions
 };

for (let i = 0; i < questions.length; i++){
    document.getElementsByClassName('answer-btn').addEventListener('click', changeQuestionAndOptions);
    console.log(questions[i]);
}

function changeQuestionAndOptions() {
    let number = document.getElementById('number-container');
    let situ = document.getElementById('situation-container')
    let question = document.getElementById('question-container');
    situation.textContent = questions.situation.value;
}
/**
 * This function will push integers to the score container based on the key-value pairs in the options key inside the questions.js file.
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