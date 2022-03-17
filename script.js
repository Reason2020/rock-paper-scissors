const choices = ["Rock", "Paper", "Scissors"];
const randomNumber = function () {
  return Math.floor(Math.random() * 3);
};

//Game Logic Here
let userScore = 0;
let computerScore = 0;
const playRound = function () {
  const computerChoice = function () {
    let computerPlays = choices[randomNumber()].toUpperCase();
    return computerPlays;
  };
  let computer = computerChoice();
  let userChoice = prompt("Enter your choice!").toUpperCase();
  if (userChoice === computer) {
    console.log(`It's a draw. Computer = ${computer} , You = ${userChoice}`);
  } else if (userChoice === "ROCK" && computer === "PAPER") {
    console.log(`You Lose. ${computer} beats ${userChoice}`);
    computerScore++;
  } else if (userChoice === "ROCK" && computer === "SCISSORS") {
    console.log(`You Win. ${userChoice} beats ${computer}`);
    userScore++;
  } else if (userChoice === "PAPER" && computer === "ROCK") {
    console.log(`You win. ${userChoice} beats ${computer}`);
    userScore++;
  } else if (userChoice === "PAPER" && computer === "SCISSORS") {
    console.log(`You Lose. ${computer} beats ${userChoice}`);
    computerScore++;
  } else if (userChoice === "SCISSORS" && computer === "ROCK") {
    console.log(`You Lose. ${computer} beats ${userChoice}`);
    computerScore++;
  } else if (userChoice === "SCISSORS" && computer === "PAPER") {
    console.log(`You Win. ${userChoice} beats ${computer}`);
    userScore++;
  }
};
const game = function () {
  for (let i = 1; i <= 5; i++) {
    playRound();
  }
  if (userScore > computerScore) {
    console.log(
      `You WIN the GAME by the SCORE => ${userScore} to ${computerScore}`
    );
  } else if (computerScore > userScore) {
    console.log(
      `Computer WINS the GAME by the SCORE => ${computerScore} to ${userScore}`
    );
  } else {
    console.log(`This GAME is a DRAW!!`);
  }
};
game();
