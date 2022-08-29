// get main vars
let body = document.querySelector('body'),
  againBtn = document.querySelector('.again'),
  number = document.querySelector('.number'),
  btn = document.querySelector('.btn'),
  checkBtn = document.querySelector('.check'),
  message = document.querySelector('.message'),
  scoreMsg = document.querySelector('.score'),
  highScore = document.querySelector('.high-score'),
  score = 20;

// display message function
const displayMessage = function (msg) {
  message.textContent = msg;
};
// lost function
const lostGame = function () {
  displayMessage('You lost the game');
  score = 0;
  scoreMsg.textContent = score;
};
// generate random number
let secretNum = Math.trunc(Math.random() * 20) + 1;
// on check btn
checkBtn.addEventListener('click', function () {
  // make input value == number
  let inputValue = Number(document.querySelector('.guess').value);
  // check if the input value equal to the secret number
  if (inputValue >= 1 && inputValue <= 20) {
    // if input value = secret number
    if (inputValue == secretNum) {
      number.textContent = secretNum;
      displayMessage('🏆 correct answer');
      body.style.backgroundColor = '#60B347';
      number.style.width = '30rem';
      // check for high score
      if (highScore.textContent < score) {
        highScore.textContent = score;
      }
    }
    // check for too high
    if (inputValue > secretNum + 2) message.textContent = 'too high';
    // check for too low
    if (inputValue < secretNum - 2) message.textContent = 'too low';
    // check for too close
    if (
      inputValue == secretNum + 1 ||
      inputValue == secretNum + 2 ||
      inputValue == secretNum - 1 ||
      inputValue == secretNum - 2
    ) {
      displayMessage('too close');
    }
    // check for NOT equal
    if (inputValue != secretNum) {
      score--;
      scoreMsg.textContent = score;
      if (score <= 1) lostGame();
    }
    // check if no input
  } else if (!inputValue) displayMessage('⛔ No number');
  // number NOT valid
  else displayMessage('between 1 and 20');
});

// on again btn
againBtn.addEventListener('click', function () {
  // generate new secret number
  secretNum = Math.trunc(Math.random() * 20) + 1;
  // return settings back
  document.querySelector('.guess').value = '';
  number.textContent = '?';
  displayMessage('Start guessing...');
  score = 20;
  scoreMsg.textContent = score;
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});
