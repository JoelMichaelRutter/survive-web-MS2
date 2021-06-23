import {
    questions
} from './questions.js';

let questionNumber = questions.length;
let currentQuestion = 0;
let scoreTally = parseInt(document.getElementById('score-tally-container').textContent);
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
 * The function and event listeners  change the question when the user 
 * selects an option after starting the game.
 */

function changeQuestionAndOptions() {
    let question = questions[currentQuestion];
    let number = document.getElementById('number-container');
    let situ = document.getElementById('situation-container')
    let quest = document.getElementById('question-container');
    let option = document.getElementsByClassName('answer-container');
    number.innerText = questions[currentQuestion].numb;
    situ.innerText = questions[currentQuestion].situation;
    quest.innerText = questions[currentQuestion].question;
    option[0].innerText = questions[currentQuestion].options.forty;
    option[1].innerText = questions[currentQuestion].options.thirty;
    option[2].innerText = questions[currentQuestion].options.twenty;
    option[3].innerText = questions[currentQuestion].options.ten;
    currentQuestion++;
}

let answerButton = document.getElementsByClassName('answer-btn')
answerButton[0].addEventListener('click', changeQuestionAndOptions);
answerButton[1].addEventListener('click', changeQuestionAndOptions);
answerButton[2].addEventListener('click', changeQuestionAndOptions);
answerButton[3].addEventListener('click', changeQuestionAndOptions);
/**
 * This function will push integers to the score container based on the key-value pairs in the options key inside the questions.js file.
 */

let userOptionScore = [40, 30, 20, 10];
answerButton[0].addEventListener('click', tallyScore(scoreTally, userOptionScore[0]));
answerButton[1].addEventListener('click', tallyScore(scoreTally, userOptionScore[1]));
answerButton[2].addEventListener('click', tallyScore(scoreTally, userOptionScore[2]));
answerButton[2].addEventListener('click', tallyScore(scoreTally, userOptionScore[3]));

function tallyScore() {
    if (userOptionScore === 40) {
        scoreTally == scoreTally + 40;
    } else if (userOptionScore === 30) {
        scoreTally == scoreTally + 30;
    } else if (userOptionScore === 20) {
        scoreTally == scoreTally + 20;
    } else if (userOptionScore === 10){
        scoreTally == scoreTally + 10;
    }
    return scoreTally;
}


/**
 * This function assesses the user's score when they complete the final scenario and will display the results 
 * aswell as some written feedback based on the score bracket they achieve. The divs this function displays 
 * will also have a a button contained within to prompt the user to play again.
 */
function assessScore() {

}