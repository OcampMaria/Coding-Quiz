var timeEl = document.querySelector(".time");
var quizEl = document.querySelector("#time");
var submitBtn = document.querySelector("#submit");
var results = document.querySelector("#results");


var secondsLeft = 75;




function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage()
      }
  
    }, 1000);
  }
  setTime();
  
