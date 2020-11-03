var timeEl = document.querySelector(".time");
var startButton = document.querySelector(".controls");
var questionContainerEl = document.querySelector("#questionContainer");
var questionEl = document.querySelector("#question");
var answerBtnEl = document.querySelector("#answer-buttons");
var infoBox = document.querySelector(".infoBox");
var Submit = document.querySelector("#submit");
var goBack = document.querySelector("#goBack");
var clear = document.querySelector("#clear");
var finalScore = document.querySelector(".finalScore");
var correctAns = document.querySelector("#footer1");
var wrongAns = document.querySelector("#footer2");
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




var questions = [
    {
        question: "What is JavaScript?",
        answers: [
            { text: "1. A programing language", correct: true },
            { text: "2. A type of animal", correct: false },
            { text: "3. A Cellphone brand", correct: false },
            {text: "4. A computer", correct: false},
        ]
    }, 
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "1. Inside the 'js' element", correct: false },
            { text: "2. Inside the 'scripture' element", correct: false },
            { text: "3. Inside 'script' element", correct: true },
            {text: "4. Inside 'java' element", correct: false},
        ]
    }, 
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "1. Hyper Text Market Link", correct: false },
            { text: "2. Home Tools Maker Language", correct: false },
            { text: "3. home Text maker language", correct: false },
            {text: "4. Hyper Text Markup Language", correct: true},
        ]
    }, 
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: [
            { text: "1. In the 'header' section", correct: false },
            { text: "2. In the 'head' section", correct: true },
            { text: "3. In the 'body' section", correct: false },
            {text: "4. At the end of the document", correct: false},
        ]
    }, 
    {
        question: "Which sign does jQuery use as a shortcut for jQuery?",
        answers: [
            { text: "1. The % sign", correct: false },
            { text: "2. The $ sign", correct: true },
            { text: "3. The ! sign", correct: false },
            {text: "4. The # sign", correct: false},
        ]
    }
    
    ]





    // added an event listener to the start quiz button to run the function when clicked. 
startButton.addEventListener("click", startQuiz)
answerBtnEl.addEventListener("click", () => {
    currentQuestionsIndex++
    setNextQuestion ()
})

function startQuiz() {
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
    questionEl.innerHTML = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct){
            button.dataset.correct = answer.correct

        };
        button.addEventListener("click", selectAnswer)
        answerBtnEl.appendChild(button);
    });
}

function resetState() {
    while(answerBtnEl.firstChild) {
        answerBtnEl.removeChild
        (answerBtnEl.firstChild)
    }
}

function selectAnswer(e) {
    var selectedBtn = e.target
    var correct = selectedBtn.dataset.correct;
   
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove ("correct");
    element.classList.remove ("wrong");
}