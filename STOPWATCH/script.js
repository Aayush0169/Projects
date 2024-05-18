let startTime;
let updatedTime;
let difference;
let tInterval;
let running = 0;

function startStop(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    running = 1;
    document.getElementById('startStop').textContent = 'Stop';
  } else {
    clearInterval(tInterval);
    running = 0;
    document.getElementById('startStop').textContent = 'Start';
  }

  
}

function reset(){
  clearInterval(tInterval);
  running = 0;
  document.getElementById('time').textContent = '00:00:00';
  document.getElementById('startStop').textContent = 'Start';
}

function getShowTime(){
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  document.getElementById('time').textContent = hours + ':' + minutes + ':' + seconds;
}

document.getElementById('startStop').addEventListener('click', startStop);
document.getElementById('reset').addEventListener('click', reset);
