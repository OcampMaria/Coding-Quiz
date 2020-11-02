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




var questions = [
    {
        question: "What is JavaScript?",
        answers: [
            { text: "A programing language", correct: true },
            { text: "A type of animal", correct: false },
            { text: "A Cellphone brand", correct: false },
            {text: "A computer", correct: false},
        ]
    }, 
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: " inside the 'js' element", correct: false },
            { text: "inside the 'scripture' element", correct: false },
            { text: "inside 'script' element", correct: true },
            {text: "inside 'java' element", correct: false},
        ]
    }, 
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Market Link", correct: false },
            { text: "Home Tools Maker Language", correct: false },
            { text: "home Text maker language", correct: false },
            {text: "Hyper Text Markup Language", correct: true},
        ]
    }, 
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: [
            { text: "in the 'header' section", correct: false },
            { text: "in the 'head' section", correct: true },
            { text: "in the 'body' section", correct: false },
            {text: "At the end of the document", correct: false},
        ]
    }, 
    {
        question: "Which sign does jQuery use as a shortcut for jQuery?",
        answers: [
            { text: "the % sign", correct: false },
            { text: "the $ sign", correct: true },
            { text: "the ! sign", correct: false },
            {text: "the # sign", correct: false},
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
    setStatusClass(document.body, correct)
   
  
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
