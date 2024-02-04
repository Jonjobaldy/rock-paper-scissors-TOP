function getComputerChoice () {
    let guess = Math.random();
    if (guess <=0.33){
        return "Rock";
    } else if (guess >0.33 && guess <=0.66) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    // Comvert both to upper case in order to be case insensitive
    let computerUpperCase = computerSelection.toUpperCase();
    let playerUpperCase = playerSelection.toUpperCase();

    if (playerUpperCase === "ROCK" && computerUpperCase === "SCISSORS") {
        console.log("You win!" + " " + playerSelection + " " + "beats" + " " + computerSelection);
        return 0;
    } else if (playerUpperCase === "ROCK" && computerUpperCase === "PAPER") {
        console.log("You lose!" + " " + playerSelection + " " + "loses to" + " " + computerSelection);
        return 1;
    } else if (playerUpperCase === "ROCK" && computerUpperCase === "ROCK") {
        console.log("Draw!" + " " + playerSelection + " " + "matches" + " " + computerSelection);
        return 2;
    } else if (playerUpperCase === "SCISSORS" && computerUpperCase === "SCISSORS") {
        console.log("Draw!" + " " + playerSelection + " " + "matches" + " " + computerSelection);
        return 2;
    } else if (playerUpperCase === "SCISSORS" && computerUpperCase === "PAPER") {
        console.log("You win!" + " " + playerSelection + " " + "beats" + " " + computerSelection);
        return 0;
    } else if (playerUpperCase === "SCISSORS" && computerUpperCase === "ROCK") {
        console.log("You lose!" + " " + playerSelection + " " + "loses to" + " " + computerSelection);
        return 1;
    } else if (playerUpperCase === "PAPER" && computerUpperCase === "SCISSORS") {
        console.log("You lose!" + " " + playerSelection + " " + "loses to" + " " + computerSelection);
        return 1;
    } else if (playerUpperCase === "PAPER" && computerUpperCase === "PAPER") {
        console.log("Draw!" + " " + playerSelection + " " + "matches" + " " + computerSelection);
        return 2;
    } else if (playerUpperCase === "PAPER" && computerUpperCase === "ROCK"){
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
        const playerSelection = prompt("Rock, Paper or Scissors?");
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