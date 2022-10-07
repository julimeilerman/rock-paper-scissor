const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice
}


function playRound(playerSelection, computerSelection){
    if (playerSelection === "Rock"){
        if(computerSelection === "Rock"){
            return "It's a DRAW"
        } else if (computerSelection === "Paper"){
            return "You LOSE! Paper beats Rock"
        } else if (computerSelection === "Scissors"){
            return "You WIN! Rock beats Scissors"
        }
    }

    if (playerSelection === "Paper"){
        if(computerSelection === "Rock"){
            return "You WIN! Paper beats Rock"
        } else if (computerSelection === "Paper"){
            return "It's a DRAW"
        } else if (computerSelection === "Scissors"){
            return "You LOSE! Scissors beat Paper"
        }
    }

    if (playerSelection === "Scissors"){
        if(computerSelection === "Rock"){
            return "You LOSE! Rock beats Scissors"
        } else if (computerSelection === "Paper"){
            return "You WIN! Scissors beat Paper"
        } else if (computerSelection === "Scissors"){
            return "It's a DRAW"
        }
    }
}
function game(){
    for (let i = 0; i < 5; i++){
        let sign = prompt("Choose");
        playerSelection = sign
        getComputerChoice()
        computerSelection = getComputerChoice()
        console.log(computerSelection)
        console.log(playRound(playerSelection, computerSelection));
    }
}

playerSelection = "";
game()