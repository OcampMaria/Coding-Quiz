var timeEl = document.querySelector(".time");
var startButton = document.querySelector(".start");

// starting time number. Timer will coundown starting at 75
var secondsLeft = 75;
//created the function to create the countdown timer
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
  
// added an event listener to the start quiz button to run the function when clicked. 
startButton.addEventListener("click", startQuiz)
function startQuiz (){
  console.log("started")
}
