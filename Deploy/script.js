var timeEl = document.querySelector(".time");
var startButton = document.querySelector(".controls");
var questionContainerEl = document.querySelector("#questionContainer");
var questionEl = document.querySelector("#question");
var answerBtnEl = document.querySelector("#answer-buttons");
var infoBox = document.querySelector(".infoBox");
var shuffledQuestions, currentQuestionsIndex;


console.log(shuffledQuestions, currentQuestionsIndex);


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




var questions = [{
    question: "What is JavaScript?",
    answers: [
        { text: "A programing language", correct: true },
        { text: "A type of animal", correct: false },
        { text: "A Cellphone brand", correct: false },
        {text: "A computer", correct: false},
    ]
}]



    // added an event listener to the start quiz button to run the function when clicked. 
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    console.log("started");
    startButton.classList.add("hide")
    infoBox.classList.add("hide")
    shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    currentQuestionsIndex = 0
    questionContainerEl.classList.remove("hide")

    console.log(shuffledQuestions[0]);
    setNextQuestion()
}


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])

}

function showQuestion(question) {
    questionEl.innerHTML = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerBtnEl.appendChild(button)
    });
}

function resetState() {
    while(answerBtnEl.firstChild) {
        answerBtnEl.removeChild
        (answerBtnEl.firstChild)
    }
}

function selectAnswer(e) {

}