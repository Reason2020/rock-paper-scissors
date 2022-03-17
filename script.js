const choices = ["Rock", "Paper", "Scissors"];
const randomNumber = function () {
  return Math.floor(Math.random() * 3);
};
const computerChoice = function () {
  let computerPlays = choices[randomNumber()];
};

// let userChoice = prompt("Enter your choice!");
