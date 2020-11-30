var timeEl = document.querySelector(".time");
var startButton = document.querySelector("#startButton");
var questionContainerEl = document.querySelector("#questionContainer");
var questionEl = document.querySelector("#question");
var answerBtnEl = document.querySelector("#answer-buttons");
var AnsBtn = document.querySelector(".AnsBtn")
var infoBox = document.querySelector(".infoBox");
var Submit = document.querySelector("#submit");
var goBack = document.querySelector("#goBack");
var clear = document.querySelector("#clear");
var correctAns = document.querySelector("#footer1");
var wrongAns = document.querySelector("#footer2");
var shuffledQuestions, currentQuestionsIndex;




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
];





// added an event listener to the start quiz button to run the function when clicked. 

$("#startButton").click(startQuiz);


function startQuiz() {
    startButton.classList.add("hide")
    infoBox.classList.add("hide")
    shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    currentQuestionsIndex = 0
    questionContainerEl.classList.remove("hide")
    console.log(shuffledQuestions[0]);

    setNextQuestion()

    // starting time number. Timer will coundown starting at 75
    var secondsLeft = 3;
    //created the function to create the countdown timer
    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = "Time: " + secondsLeft;

            // when timer reaches 0, then call the finalScore function
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                timeEl.textContent = " ";

                finalScore ()
            }
            
    }, 1000);
    }
    setTime();

    
    // displays the finals score
    function finalScore(){
        document.querySelector(".finalScore").classList.remove("hide");
        var p = document.createElement("p");
        p.innerText = "Your final score is: " + secondsLeft;
        document.querySelector(".finalScoreEl").appendChild(p);
        questionContainerEl.classList.add("hide");
        document.querySelector("#header").classList.add("hide");
        document.querySelector("#submit").classList.remove("hide");

        $("#submit").click(function () {
            var inputinitials = document.querySelector(".initials");
            localStorage.setItem(".initials", inputinitials.value)

            highscore = localStorage.getItem(".initials");
           console.log(highscore, "helo");
           
        })    
    }



function setNextQuestion() {
    function showQuestion(question) {
        questionEl.innerHTML = question.question;
        question.answers.forEach(answer => {
            var button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            if (answer.correct){
                button.dataset.correct = answer.correct
            };
    
            button.addEventListener("click", selectedAnswer)
            answerBtnEl.appendChild(button);
        });
    }
    
    function selectedAnswer(e) {
        var selectedBtn = e.target
        var correct = selectedBtn.dataset.correct;
        setStatusClass(document.body, correct)
       
    }
    
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
    
    function resetState() {
        while(answerBtnEl.firstChild) {
            answerBtnEl.removeChild
            (answerBtnEl.firstChild)
        }
}}



function setStatusClass(element, correct) {
    clearStatusClass (element)

    if (correct){
        correctAns.classList.remove("hide")
        wrongAns.classList.add("hide")
        
    } else {
        wrongAns.classList.remove("hide")
        correctAns.classList.add("hide")
        
    }
}

function clearStatusClass (element) {
    correctAns.classList.add("hide")
    correctAns.classList.add("hide")
}
}