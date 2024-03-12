const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Player wins!")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer wins!")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Player wins!")
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Computer wins!")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Player wins!")
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Computer wins!")
    } else {
        console.log("Draw!")
    }
}

const computerSelection = getComputerChoice();
const playerSelection = "roCk".toLowerCase();

playRound(playerSelection, computerSelection);