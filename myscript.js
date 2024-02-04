function getComputerChoice () {
    let guess = Math.random();
    if (guess <=0.33){
        return "Rock";
    } else if (guess >0.33 & guess <=0.66) {
        return "Paper";
    } else {
        return "Scissors"
    }
}
let choice = getComputerChoice();
console.log(choice);