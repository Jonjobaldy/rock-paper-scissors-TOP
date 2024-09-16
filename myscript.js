let userScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");

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
        userScore += 1;
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        resultsDiv.textContent = "You lose!" + " " + playerSelection + " " + "loses to" + " " + computerSelection;
        computerScore += 1;
    } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
        resultsDiv.textContent = "Draw!" + " " + playerSelection + " " + "matches" + " " + computerSelection;
    } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        resultsDiv.textContent = "Draw!" + " " + playerSelection + " " + "matches" + " " + computerSelection;
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        resultsDiv.textContent = "You win!" + " " + playerSelection + " " + "beats" + " " + computerSelection;
        userScore += 1;
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        resultsDiv.textContent = "You lose!" + " " + playerSelection + " " + "loses to" + " " + computerSelection;
        computerScore += 1;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        resultsDiv.textContent = "You lose!" + " " + playerSelection + " " + "loses to" + " " + computerSelection;
        computerScore += 1;
    } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        resultsDiv.textContent = "Draw!" + " " + playerSelection + " " + "matches" + " " + computerSelection;
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
        resultsDiv.textContent = "You Win!" + " " + playerSelection + " " + "beats" + " " + computerSelection;
        userScore +=1;
    } else {
        resultsDiv.textContent = "Error! Please Try again.";
    }
    const score = document.createElement("p");
    score.textContent = "User score:" + userScore + " " + "Computer score:" + computerScore;
    resultsDiv.appendChild(score);
}

function checkWinner(userScore, computerScore){
    if(userScore === 5){
        const endText = document.createElement("h2");
        endText.innerText = `You won ${userScore} to ${computerScore}`;
        resultsDiv.appendChild(endText);
    } else if(computerScore === 5){
        const endText = document.createElement("h2");
        endText.innerText = `You lost ${userScore} to ${computerScore}`;
        resultsDiv.appendChild(endText);
    }

    }


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
        checkWinner(userScore, computerScore);
    });
    });

const resultsDiv = document.querySelector("div");

