function countdown() {
    var seconds = 60; // Change this to adjust the starting time (in seconds)
    var timer = document.getElementById("timer");
  
    function tick() {
      seconds--;
      var min = Math.floor(seconds / 60);
      var sec = seconds % 60;
  
      // Format the timer display with leading zeros
      timer.innerHTML = (min > 0 ? min + "m " : "") + (sec < 10 ? "0" : "") + sec + "s";
  
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else {
        // Timer finished
        timer.innerHTML = "Time's Up!";
      }
    }
  
    tick();
  }
  
  countdown();
  