function computerPlay() {
    let item = ["rock", "paper", "scissors"];
    return item[Math.floor(Math.random() * item.length)]
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase()

    if(computerSelection == playerSelection) {
        console.log("Aw shucks! That's a draw.");
    }
    else if(playerSelection == "rock") {
        if(computerSelection == "scissors") {
            console.log("You Win! Rock beats Scissors.");
        }       
        else {
            console.log("You Lose! Paper beats Rock.");
        }
    }
    else if(playerSelection == "scissors") {
        if(computerSelection == "paper") {
            console.log("You Win! Scissors beats Paper.");
        }
        else {
            console.log("You Lose! Rock beats Scissors.");
        }
    }
    else {
        if(computerSelection == "rock") {
            console.log("You Win! Paper beats Rock.");
        }
        else {
            console.log("You Lose! Scissors beats Paper.");
        }
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));