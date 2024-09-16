function getComputerChoice () {
    let guess = Math.random();
    if (guess <=0.33){
        return "ROCK";
    } else if (guess >0.33 && guess <=0.66) {
        return "PAPER";
    } else {
        return "SCISSORS"
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        resultsDiv.textContent = "You win!" + " " + playerSelection + " " + "beats" + " " + computerSelection;
        return 0;
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        resultsDiv.textContent = "You lose!" + " " + playerSelection + " " + "loses to" + " " + computerSelection;
        return 1;
    } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
        resultsDiv.textContent = "Draw!" + " " + playerSelection + " " + "matches" + " " + computerSelection;
        return 2;
    } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        resultsDiv.textContent = "Draw!" + " " + playerSelection + " " + "matches" + " " + computerSelection;
        return 2;
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        resultsDiv.textContent = "You win!" + " " + playerSelection + " " + "beats" + " " + computerSelection;
        return 0;
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        resultsDiv.textContent = "You lose!" + " " + playerSelection + " " + "loses to" + " " + computerSelection;
        return 1;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        resultsDiv.textContent = "You lose!" + " " + playerSelection + " " + "loses to" + " " + computerSelection;
        return 1;
    } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        resultsDiv.textContent = "Draw!" + " " + playerSelection + " " + "matches" + " " + computerSelection;
        return 2;
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        resultsDiv.textContent = "You Win!" + " " + playerSelection + " " + "beats" + " " + computerSelection;
        return 0;
    } else {
        resultsDiv.textContent = "Error! Please Try again.";
    }
}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
        playRound(button.id);
    ;
  });
});

const resultsDiv = document.querySelector("div");

let userScore = 0;
let computerScore = 0;

while (userScore <3 && computerScore <3) {

        let winner = playRound(playerSelection,computerSelection);
        if (winner === 0) {
            userScore += 1;
        } else if (winner === 1) {
            computerScore += 1;
        } else {
            continue;
        }
        console.log(`Your score : ${userScore}, Computer Score: ${computerScore}`)
    }
    
if (userScore === 3) {
        alert("You Won!");
    } else if (computerScore === 3) {
        alert("You Lost!");
    } else {
        alert("Draw!");
    }



//playGame();