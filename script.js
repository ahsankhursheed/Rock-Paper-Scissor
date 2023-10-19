let scoreDiv = document.getElementById('player-score');
let handsDiv = document.getElementById('hands');
let resultDiv = document.getElementById('result');
let totalScore = { playerChoice: 0, computerChoice: 0 }

// getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string 
function getComputerChoice() {
  const gameChoice = ['Rock', 'Paper', 'Scissors'];
  const randomSelect = Math.floor(Math.random() * gameChoice.length);
  return gameChoice[randomSelect];
}

// getResult compares playerChoice & computerChoice and returns the score accordingly
// player wins - Score is 1
// player loses - Score is -1
// player draws - Score is 0
function getResult(playerChoice, computerChoice) {

  let score;

  // All situations where player draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0;
  }

  // All situations where player wins, set `score` to 1

  else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;
  }
  else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
  }
  else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;
  }

  // Otherwise player loses (set score to -1)
  else {
    score = -1;
  }

  // return score
  return score
}

// showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice
function showResult(score, playerChoice, computerChoice) {

  if (score === 1) {
    resultDiv.innerText = `You Win!`;
  }
  else if (score === 0) {
    resultDiv.innerText = `It's a draw!`;
  }
  else {
    resultDiv.innerText = `You lose!`;
  }
  handsDiv.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
  scoreDiv.innerText = totalScore['playerChoice'];
}

// Calculating who won and show it on the screen
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  totalScore['playerChoice'] += score;
  showResult(score, playerChoice, computerChoice);
}


// Making the RPS buttons actively listen for a click and do something once a click is detected
function playGame() {
  

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  let btnRPS = document.querySelectorAll('.rpsButton');
 
  btnRPS.forEach(button => button.onclick = () => onClickRPS(button.value));


  // Adding a click listener to the end game button that runs the endGame() function on click
  let endGameButtonDiv = document.getElementById('endGameButton');
  endGameButtonDiv.onclick = () => endGame();
}

// endGame function clears all the text on the DOM
function endGame() {
  totalScore['playerChoice'] = 0;
  totalScore['computerChoice'] = 0;
  scoreDiv.innerText = '';
  handsDiv.innerText = '';
  resultDiv.innerText = '';
}

playGame()