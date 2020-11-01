var timeEl = document.querySelector(".time");
var startButton = document.querySelector(".start");
var questionContainerEl = document.querySelector(".questionContainer");
var questionEl = document.querySelector(".question");
var answerBtnEl = document.querySelector(".answerBtns");


// starting time number. Timer will coundown starting at 75
var secondsLeft = 75;
//created the function to create the countdown timer
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage()
        }

    }, 1000);
}
setTime();

var shuffledQuestions, currentQuestionsIndex
console.log();
// added an event listener to the start quiz button to run the function when clicked. 
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    console.log("started");

    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
        // created the variables locally to make the elements dissapear after clicked. 
    var start = document.querySelector(".start");
    var direction = document.querySelector(".infoBox")


    // make the directions and the start quiz button dissaoear after clicked. 
    if (start.getElementsByClassName.display === "none") {
        start.style.display = "block";
    } else {
        start.style.display = "none";
    }
    if (direction.getElementsByClassName.display === "none") {
        direction.style.display = "block";
    } else {
        direction.style.display = "none";
    }

    setNextQuestion()
}


function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionsIndex])

}

function showQuestion(question) {

}

function selectAnswer() {

}


var questions = [{
    question: "What is JavaScript",
    answers: [
        { text: "A programing language", correct: true },
        { text: "A type of animal", correct: false }
    ]
}];