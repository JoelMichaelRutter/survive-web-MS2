import {
    questions
} from './questions.js';

let questionNumber = questions.length;
let currentQuestion = 0;
let scoreTally = parseInt(document.getElementById('score-tally-container').textContent);
let playButton = document.getElementById('start-game');
let gameArea = document.getElementById('game-container');
let answerContainer = document.getElementById('answer-btn-container');
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
    console.log(currentQuestion);
    if (currentQuestion === 11){
        assessScore();
}
}

let answerButton = Array.from(document.getElementsByClassName('answer-btn'));
console.log(answerButton);
answerButton.forEach(button => button.addEventListener('click', () => {
    changeQuestionAndOptions();
    tallyScore(button);
}));

/**
 * This function will push integers to the score container based on the answer the user picks.
 */
function tallyScore(button) {
    if (button.id === 'answer-one') {
        scoreTally = scoreTally + 40;
        console.log(scoreTally);
    } else if (button.id === 'answer-two') {
        scoreTally = scoreTally + 30;
    } else if (button.id === 'answer-three') {
        scoreTally = scoreTally + 20;
    } else if (button.id === 'answer-four'){
        scoreTally = scoreTally + 10;
    }
    document.getElementById('score-tally-container').textContent = scoreTally;
}

/**
 * This if statement checks the question number and if the question number is true, it will run the assess score function.
 * Should more questions be added with later releases the number in this if statement would need to change to the blank question
 * after the final question so that when the user clicks their final answer, the assessScore function will be called.
 */


/**
 * This function assesses the user's score when they complete the final scenario and will display the results 
 * aswell as some written feedback based on the score bracket they achieve. The divs this function displays 
 * will also have a a button contained within to prompt the user to play again.
 */
function assessScore() {
    if(scoreTally > 300){
        gameArea.style.display = "none";
        answerContainer.style.display = "none";
        document.getElementById('best-score').style.display = "block";
    } else if (scoreTally > 200){
        gameArea.style.display = "none";
        answerContainer.style.display = "none";
        document.getElementById('good-score').style.display = "block";
    }
    else if (scoreTally > 100){
        gameArea.style.display = "none";
        answerContainer.style.display = "none";
        document.getElementById('bad-score').style.display = "block";
    }
    else if (scoreTally = 100){
        gameArea.style.display = "none";
        answerContainer.style.display = "none";
        document.getElementById('worst-score').style.display = "block";
    }
}