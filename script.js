//Selectors
const buttons = document.querySelectorAll(".btns");
const userChoiceDisplay = document.querySelector(".user-choice-display");
const computerChoiceDisplay = document.querySelector(
  ".computer-choice-display"
);
const roundWinnerDisplay = document.querySelector(".round-winner-display");
const scores = document.querySelector(".scores");
const matchWinner = document.querySelector(".match-winner");

//Initial States
const choicesArray = ["ROCK", "PAPER", "SCISSORS"];
let userChoice;
let computerChoice;
let roundCount = 1;
let userScore = 0;
let computerScore = 0;

//Functions
let randomNumber = function () {
  return Math.floor(Math.random() * 3);
};
const roundWinner = function () {
  if (userChoice == "ROCK" && computerChoice == "PAPER") {
    roundWinnerDisplay.textContent = "Computer Wins The Round!";
    computerScore++;
    scores.textContent = `Your Score => ${userScore} : Computer Score => ${computerScore}`;
  } else if (userChoice == "ROCK" && computerChoice == "SCISSORS") {
    roundWinnerDisplay.textContent = "You Win The Round!";
    userScore++;
    scores.textContent = `Your Score => ${userScore} : Computer Score => ${computerScore}`;
  } else if (userChoice == "PAPER" && computerChoice == "ROCK") {
    roundWinnerDisplay.textContent = "You Win The Round";
    userScore++;
    scores.textContent = `Your Score => ${userScore} : Computer Score => ${computerScore}`;
  } else if (userChoice == "PAPER" && computerChoice == "SCISSORS") {
    roundWinnerDisplay.textContent = "Computer Wins The Round!";
    computerScore++;
    scores.textContent = `Your Score => ${userScore} : Computer Score => ${computerScore}`;
  } else if (userChoice == "SCISSORS" && computerChoice == "ROCK") {
    roundWinnerDisplay.textContent = "Computer Wins The Round";
    computerScore++;
    scores.textContent = `Your Score => ${userScore} : Computer Score => ${computerScore}`;
  } else if (userChoice == "SCISSORS" && computerChoice == "PAPER") {
    roundWinnerDisplay.textContent = "You Win The Round";
    userScore++;
    scores.textContent = `Your Score => ${userScore} : Computer Score => ${computerScore}`;
  } else if (userChoice === computerChoice) {
    roundWinnerDisplay.textContent = `It's a draw!`;
    scores.textContent = `Your Score => ${userScore} : Computer Score => ${computerScore}`;
  }
};

buttons.forEach((btns) => {
  btns.addEventListener("click", () => {
    userChoice = btns.textContent.toUpperCase();
    computerChoice = choicesArray[randomNumber()];
    // console.log(userChoice, computerChoice);
    userChoiceDisplay.textContent = userChoice;
    computerChoiceDisplay.textContent = computerChoice;
    if (userScore < 5 && computerScore < 5) {
      roundWinner();
    } else if (userScore >= 5) {
      matchWinner.textContent = `You've Won The Match!`;
    } else if (computerScore >= 5) {
      matchWinner.textContent = `Computer has Won The Match!`;
    }
  });
});
