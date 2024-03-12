const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Player wins!")
        round++
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer wins!")
        round++
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Player wins!")
        round++
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Computer wins!")
        round++
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Player wins!")
        round++
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Computer wins!")
        round++
    } else if (playerSelection === computerSelection){
        console.log("Draw!");
        
        round++
    }
}

function playGame() {
    while (round != 5) {
        playRound(playerSelection, computerSelection);
        console.log(round);
    }
}
let round = 0;
const computerSelection = getComputerChoice();
const playerSelection = "roCk".toLowerCase();

playGame();