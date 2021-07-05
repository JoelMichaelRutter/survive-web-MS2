import {
    questions
} from './questions.js';
/**
 * Here are my global variables:
 * > questionNumber - This variable serves as the container for each object item in the questions array imported from the questions.js file.
 * > currentQuestion - This initialises to 0 so that when it is accessed in the changeQuestionAndOptionsFunction, we start at the first question.
 * > scoreTally - This variable grabs the text content from the score-tally-container span element and passes it into script as an integer so that 
 *                we can perform mathematical operations on it to calculate the users score. It is accessed and manuipulated in the tallyScore function.
 * > playButton - This variable grabs the start-game button from the HTML document so that we can use it to listen for a click event to fire the runGame function.
 * > gameArea - This variable obtains the div with the id of game-container so that we can manipulate the DOM when we call functions.
 * > answerContainer - Like the gameArea variable, we also need the answer-btn-container to dissapear at the end of the game so it is contained in this variable for use
 *                     later in the script.
 */
let questionNumber = questions.length;
let currentQuestion = 0;
let scoreTally = parseInt(document.getElementById('score-tally-container').textContent);
let playButton = document.getElementById('start-game');
let gameArea = document.getElementById('game-container');
let answerContainer = document.getElementById('answer-btn-container');

playButton.addEventListener('click', startGame);

let audio = new Audio();
audio.src = "assets/audio/survive-web-bg-music-compressed.mp3";
audio.loop = true;

document.getElementById('play-music-btn').addEventListener('click', function() { audio.play(); });
document.getElementById('mute-music-btn').addEventListener('click', function() { audio.pause(); });
/**
 * This function runs the intial sequence to start the game on click of the start-game button, from here the change question 
 * function will take over to populate the HTML from the questions.js file each time an 
 * answer is selected. This function also calls the audio variable and sets the music playing.
 */
function startGame() {
    let rulesContainer = document.getElementById('rules-container');
    rulesContainer.style.display = 'none';
    let gameArea = document.getElementById('game-container');
    gameArea.style.display = 'table';
    let answerContainer = document.getElementById('answer-btn-container')
    answerContainer.style.display = 'flex';
    changeQuestionAndOptions();
    audio.play();
}

/**
 * The below function changes the question and answer options when the user clicks or selects one of the answer buttons.
 * It increments through the array contained in the questions variable in the questions.js file. The variable is imported at
 * the top of the script to keep the large quantity of data sequestered away from the workings of the application. 
 * 
 * Inside the function, there is an if statement that is constantly checking the currentQuestion variable. If the variable
 * reaches the specified value, it will run the assessScore function to check the users score and display their feedback message.
 * If further questions are added to the game, a blank question must be inserted into the array to serve as the stopping point. 
 * The "numb" value from the key value pair should then be inserted into the if statement parameters inside this function.
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

/**
 * This variable and attached event listener fires the functions changeQuestionAndOptions 
 * to advance the user through the quiz and increment the score accordingly when the user 
 * clicks one of the answer buttons.
 */
let answerButton = Array.from(document.getElementsByClassName('answer-btn'));
console.log(answerButton);
answerButton.forEach(button => button.addEventListener('click', () => {
    changeQuestionAndOptions();
    tallyScore(button);
}));

/**
 * This is the tallyScore function which is called when the user clicks one of the answer buttons. 
 * It assesses through an if statement which button has been clicked and adds a the corresponding 
 * amount to the scoreTally variable.
 * 
 * It is worth noting here that should additional questions be added to the quiz, the scoring system 
 * would possibly need to change to account for the increase in questions.
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
 * This function assesses the user's score when they complete the final scenario and will display the results 
 * aswell as some written feedback based on the score bracket they achieve. The divs this function displays 
 * will also have a a button contained within to prompt the user to play again.
 * 
 * Like with the tallyScore function, if additional questions were added to the game inside the questions.js file,
 * it would be pertinent to either amend the scoring brackets below, or change the value added to the score because
 * more chances to score would be available.
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

/**
 * The code below grabs the play again buttons from the score divs and and adds an event listener to each which calls the restart game function.
 */
let playAgainBtns = Array.from(document.getElementsByClassName('play-again-btn'));
playAgainBtns.forEach(button => button.addEventListener('click', () => {
    restartGame();
}));

/**
 * This function reloads the document on click of a play again button which will then let the user run through the quiz again.
 * This method allows the user to look at the rules container again.
 */
function restartGame(){
    document.location.href = "";
}