const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Player wins!")
        playerPoints++
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer wins!")
        computerPoints++
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Player wins!")
        playerPoints++
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Computer wins!")
        computerPoints++
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Player wins!")
        playerPoints++
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Computer wins!")
        computerPoints++
    } else if (playerSelection === computerSelection){
        console.log("Draw!");
    }
}

function playGame() {
    while (round != 5) {
        playerSelection = prompt("Choose your sign").toLowerCase();
        let computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection);
        round++
        console.log("Rounds: " + round)
        console.log("Player Points: " + playerPoints);
        console.log("Computer Points: " + computerPoints)
        if (round === 5 && (playerPoints > computerPoints)) {
            console.log("Player Wins the Game!!!")
        } else if (round === 5 && (playerPoints === computerPoints)){
            console.log("It's a Draw!!!")
        } else if (round === 5 && (playerPoints < computerPoints)){
            console.log("Computer Wins the Game!!!")
        }
    }
}



function getPlayerSelection(playerSelection) {}
let computerPoints = 0;
let playerPoints = 0;
let round = 0;
let computerSelection = getComputerChoice()
let playerSelection = "";
playGame();
