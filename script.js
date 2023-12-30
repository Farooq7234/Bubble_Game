let randomColor = ["red", "orange", "blue"];

// Function to set the high score
function setHighScore(score) {
  sessionStorage.setItem('highScore', score);
}

// Function to get the high score
function getHighScore() {
  return sessionStorage.getItem('highScore') || 0;
}

// Function to display the high score
function displayHighScore() {
  const highScore = getHighScore();
  document.querySelector('#Hscorebox').textContent = highScore;
}

function makeBubble() {
  let clutter = "";
  for (let i = 0; i <= 64; i++) {
    let rn = Math.floor(Math.random() * 10);
    let colorIndex = Math.floor(Math.random() * 3);
    clutter += `<div class="bubble ${randomColor[colorIndex]}">${rn}</div>`;
  }
  document.querySelector('#pbtm').innerHTML = clutter;
}

let hitrn = 0;
let timer = 60;
let score = 0;

function increaseScore() {
  score += 10;
  document.querySelector('#scoreval').textContent = score;

  // Check and update high score
  const currentHighScore = getHighScore();
  if (score > currentHighScore) {
    setHighScore(score);
    displayHighScore();
  }
}

function newHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector('#hitval').textContent = hitrn;
}

function runTimer() {
  let timeInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector('#timerval').textContent = timer;
      if (timer == 10) {
        document.querySelector('#timerval').style.color = 'red';
      }
    } else {
      let removePbtm = document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1>`;
      clearInterval(timeInterval);
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener('click', function (dets) {
  let clickednum = Number(dets.target.textContent);

  if (hitrn === clickednum) {
    increaseScore();
    makeBubble();
    newHit();
  }
});

let restart = document.querySelector('.restartbtn')

restart.addEventListener('click', function () {
  location.reload()
})

// Call displayHighScore to show the initial high score
displayHighScore();
runTimer();
makeBubble();
newHit();






