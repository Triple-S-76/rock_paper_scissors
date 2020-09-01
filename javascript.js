
function randomNumber123() { // Provides random number ( 1 or 2 or 3 )
    return Math.floor(Math.random() * (3) ) + 1;
}

function computerChoice() { // Chooses Rock, Paper or Scissors for the computer
    let cs = randomNumber123();
    if (cs === 1) {
        return("rock");
    } else if (cs === 2 ) {
        return("paper")
    } else if (cs === 3 ) {
        return("scissors")
    }
}

function playRound (ps, cs) { // Plays a single round and returns the result
    if (ps === cs) {
        return("It's a draw! You and the computer both chose " + ps + ", try again!");
    } else if (ps === "rock") {
        if (cs === "scissors") {
            return("You won! You smashed the computers scissors with a rock!");
        } else {
            return("You lost! The computer covered your rock with paper!");
        }
    } else if (ps === "paper") {
        if (cs === "rock") {
            return("You won! You covered the computers rock with paper!");
        } else {
            return("You lost! The computer cut up your paper with scissors!")
        }
    } else if (ps === "scissors") {
        if (cs === "paper") {
            return("You won! You cut the computers paper with scissors!")
        } else {
            return("You lost! The computer smashed your scissors with a rock!")
        }
    } else {
        return("You can only choose Rock, Paper or Scissors!")
    }
}

function fixPlayerSelection (playerChoice) { // Changes "1" or "RocK" to rock
    if (playerChoice === "1" || playerChoice === "rock") {
        return "rock";
    } else if (playerChoice === "2" || playerChoice === "paper") {
        return "paper";
    } else if (playerChoice === "3" || playerChoice === "scissors") {
        return "scissors";
    } else {
        return playerChoice;
    }
}

// Setting variables

let gamesToWin = prompt("How many games to win?", 3);
let playerAuto = prompt("Would you like autoplay on?", "Yes");
let playerAutoFixed = playerAuto.toLowerCase();
let gameOn = "yes";
let playerSelection = "";
let playerSelectionFixed = "";
let currentResult = "";
let currentResultSliced = "";
let totalGames = 0;
let playerScore = 0;
let computerScore = 0;

function playGame() { // function plays until a winner is declared

for (totalGames = 0; (playerScore < gamesToWin) && (computerScore < gamesToWin); totalGames++) {

    if (gameOn === "yes") {
        
        if (playerAutoFixed !== "yes") {
            playerSelection = prompt("Choose your weapon", "1 Rock or 2 Paper or 3 Scissors");
            playerSelectionFixed = fixPlayerSelection(playerSelection.toLowerCase());
        } else {
            playerSelection = computerChoice();
            playerSelectionFixed = fixPlayerSelection(playerSelection.toLowerCase());
        }

        currentResult = playRound(playerSelectionFixed, computerChoice());
        console.log(currentResult);
        currentResultSliced = currentResult.slice(0, 8);

        if (currentResultSliced === "You won!") {
            playerScore++;
        } else if (currentResultSliced === "You lost") {
            computerScore++;
        }

        if ((playerScore < gamesToWin) && (computerScore < gamesToWin)) {
            if (playerScore > computerScore) {
                console.log("You are beating the computer " + playerScore + 
                  " game\(s\) to " + computerScore)
            } else if (playerScore < computerScore) {
                console.log("The computer is beating you " + computerScore + 
                  " game\(s\) to " + playerScore)
            } else {
                console.log("You and the computer are tied at " + playerScore)
            }
        } else if (playerScore > computerScore) {
            console.log("Congratulations! You beat the computer by a score of " + 
              playerScore + " to " + computerScore + " in " + (totalGames + 1) + " games. Good work!")
            gameOn = "Game Over"
        } else {
            console.log("You lost to the computer by a score of " + computerScore + 
              " to " + playerScore + " in " + (totalGames + 1) + " games. Try again later!")
            gameOn = "Game Over"
        }
    }
}
}

playGame();
