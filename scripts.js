const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}



const header = document.querySelector(".totalScore")
const totalScore = document.createElement("p");
header.appendChild(totalScore);

function playRound(playerSelection, computerSelection) {

    const results = document.querySelector("#results");
    const result = document.createElement("p");
    result.classList.add("result");
    
    const winner = document.createElement("h1");
    winner.classList.add("winner");

    totalScore.textContent = "Player score is: " + playerPoints + " || Computer score is: " + computerPoints;

    if (playerPoints >= 5) {
        winner.textContent = "The winner is: Player!";
        while (results.firstChild) {
            results.removeChild(results.firstChild);
        }
        results.appendChild(winner);
        return;   
    } else if (computerPoints >= 5) {
        winner.textContent = "The winner is: Computer!";
        while (results.firstChild) {
            results.removeChild(results.firstChild);
        }
        results.appendChild(winner);
        return;
    }
       


    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Player wins!")
        finalResult = "Player wins!";
        playerPoints++
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer wins!")
        finalResult = "Computer wins!";
        computerPoints++
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Player wins!")
        finalResult = "Player wins!";
        playerPoints++
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Computer wins!")
        finalResult = "Computer wins!";
        computerPoints++
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Player wins!")
        finalResult = "Player wins!";
        playerPoints++
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Computer wins!")
        finalResult = "Computer wins!";
        computerPoints++
    } else if (playerSelection === computerSelection){
        console.log("Draw!");
        finalResult = "Draw!";
    }
    result.textContent = finalResult
    results.appendChild(result)
}





let computerPoints = 0;
let playerPoints = 0;
let round = 0;
let computerSelection = getComputerChoice()
let playerSelection = "";


        
        

const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>{
    button.addEventListener("click", () => {
        let computerSelection = getComputerChoice()
        let playerSelection = button.textContent;
        playRound(playerSelection, computerSelection);
    });
})






