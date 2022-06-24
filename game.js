function computerPlay() {
    let item = ["rock", "paper", "scissors"];
    return item[Math.floor(Math.random() * item.length)]
}

let playerWins = 0, computerWins = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase()

    if(computerSelection == playerSelection) {
        console.log("Aw shucks! That's a draw.");
    }
    else if(playerSelection == "rock") {
        if(computerSelection == "scissors") {
            console.log("You Win! Rock beats Scissors.");
            playerWins++;
        }       
        else {
            console.log("You Lose! Paper beats Rock.");
            computerWins++;
        }
    }
    else if(playerSelection == "scissors") {
        if(computerSelection == "paper") {
            console.log("You Win! Scissors beats Paper.");
            playerWins++;
        }
        else {
            console.log("You Lose! Rock beats Scissors.");
            computerWins++;
        }
    }
    else {
        if(computerSelection == "rock") {
            console.log("You Win! Paper beats Rock.");
            playerWins++;
        }
        else {
            console.log("You Lose! Scissors beats Paper.");
            computerWins++;
        }
    }
}

//const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game() {
    
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose what you want to play: ");
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }

    if(playerWins > computerWins) {
        console.log("Congratulations, you won the game!");
    }
    else {
        console.log("Computers will replace you, human!");
    }
}