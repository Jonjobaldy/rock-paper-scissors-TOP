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

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

const computerSelection = getComputerChoice();

rockButton.addEventListener("click", () => {
        let playerSelection = "ROCK";
        playRound("ROCK", computerSelection);
})

paperButton.addEventListener("click", () => {
    playRound();
    let playerSelection = "PAPER";
})

scissorsButton.addEventListener("click", () => {
    playRound();
    let playerSelection = "SCISSORS";
})

function playRound(playerSelection, computerSelection) {
    // Comvert both to upper case in order to be case insensitive
    let computerUpperCase = computerSelection.toUpperCase();

    if (playerSelection === "ROCK" && computerUpperCase === "SCISSORS") {
        console.log("You win!" + " " + playerSelection + " " + "beats" + " " + computerSelection);
        return 0;
    } else if (playerSelection === "ROCK" && computerUpperCase === "PAPER") {
        console.log("You lose!" + " " + playerSelection + " " + "loses to" + " " + computerSelection);
        return 1;
    } else if (playerSelection === "ROCK" && computerUpperCase === "ROCK") {
        console.log("Draw!" + " " + playerSelection + " " + "matches" + " " + computerSelection);
        return 2;
    } else if (playerSelection === "SCISSORS" && computerUpperCase === "SCISSORS") {
        console.log("Draw!" + " " + playerSelection + " " + "matches" + " " + computerSelection);
        return 2;
    } else if (playerSelection === "SCISSORS" && computerUpperCase === "PAPER") {
        console.log("You win!" + " " + playerSelection + " " + "beats" + " " + computerSelection);
        return 0;
    } else if (playerSelection === "SCISSORS" && computerUpperCase === "ROCK") {
        console.log("You lose!" + " " + playerSelection + " " + "loses to" + " " + computerSelection);
        return 1;
    } else if (playerSelection === "PAPER" && computerUpperCase === "SCISSORS") {
        console.log("You lose!" + " " + playerSelection + " " + "loses to" + " " + computerSelection);
        return 1;
    } else if (playerSelection === "PAPER" && computerUpperCase === "PAPER") {
        console.log("Draw!" + " " + playerSelection + " " + "matches" + " " + computerSelection);
        return 2;
    } else if (playerSelection === "PAPER" && computerUpperCase === "ROCK"){
        console.log("You Win!" + " " + playerSelection + " " + "beats" + " " + computerSelection);
        return 0;
    } else {
        console.log("Error! Please Try again.");
    }
}

function playGame () {
    let userScore = 0;
    let computerScore = 0;

    while (userScore <3 && computerScore <3) {
        const computerSelection = getComputerChoice();

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
}


playGame();