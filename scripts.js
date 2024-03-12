const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors")
        console.log("Player wins!")
    }

const computerSelection = getComputerChoice();
console.log(computerSelection);
const playerSelection = "roCk".toLowerCase();

playRound(playerSelection, computerSelection);