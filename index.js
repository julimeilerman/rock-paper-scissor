const choices = ["Rock", "Paper", "Scissors"];
const computerEl = document.getElementById("computer-el")
const playerEl = document.getElementById("player-el")
const matchEl = document.getElementById("match-el")
const gameEl = document.getElementById("game-el")

const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")

const playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")

let wins = 0
let loses = 0

playerScore.textContent =`Your score = ${wins}`
computerScore.textContent = `Computer score = ${loses}`

// FUNCTIONS FOR THE BUTTONS FOR THE PLAYER SELECTION

rockBtn.addEventListener("click", function(){
    game("Rock")
})
paperBtn.addEventListener("click", function(){
    game ("Paper")
})
scissorsBtn.addEventListener("click", function(){
    game("Scissors")
})

// COMPUTER SELECTION
function getComputerChoice(){
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice
}

//CODE FOR THE RULES SYSTEM
function playRound(playerSelection, computerSelection){
    if (playerSelection === "Rock"){
        if(computerSelection === "Rock"){
            return "DRAW"
        } else if (computerSelection === "Paper"){
            return "You LOSE!";
        } else if (computerSelection === "Scissors"){
            return "You WIN!"
        }
    }

    if (playerSelection === "Paper"){
        if(computerSelection === "Rock"){
            return "You WIN!"
        } else if (computerSelection === "Paper"){
            return "It's a DRAW"
        } else if (computerSelection === "Scissors"){
            return "You LOSE!"
        }
    }

    if (playerSelection === "Scissors"){
        if(computerSelection === "Rock"){
            return "You LOSE!"
        } else if (computerSelection === "Paper"){
            return "You WIN!"
        } else if (computerSelection === "Scissors"){
            return "It's a DRAW"
        }
    }
}


// CODE FOR THE PLAYER INTERACTION AND GAME
function game(btnSelection){
    playerSelection = btnSelection
    playerEl.textContent =`PLAYER : ${playerSelection}`
    getComputerChoice()
    computerSelection = getComputerChoice()
    computerEl.textContent = `PC: ${computerSelection}`
    matchEl.textContent = playRound(playerSelection, computerSelection)
    console.log(`Computer choosed ${computerSelection}. You chooseed ${playerSelection}
    ${playRound(playerSelection, computerSelection)}`)
    if (playRound(playerSelection, computerSelection) === "You WIN!"){
        wins += 1;
    } else if (playRound(playerSelection, computerSelection) === "You LOSE!"){
        loses += 1;
    }
    playerScore.textContent =`Your score = ${wins}`
    computerScore.textContent = `Computer score = ${loses}`
    
    if (wins == 5 || loses == 5){
        if (wins === 5){
            gameEl.textContent = "YOU WIN THE GAME"
        } else if (loses === 5){
            gameEl.textContent = "YOU LOSE THE GAME"
        }
        loses = 0
        wins = 0
        playerScore.textContent =`Your score = ${wins}`
        computerScore.textContent = `Computer score = ${loses}`

    } 
}