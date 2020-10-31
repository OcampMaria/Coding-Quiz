var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
//
var secondsLeft = 50;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}


setTime();