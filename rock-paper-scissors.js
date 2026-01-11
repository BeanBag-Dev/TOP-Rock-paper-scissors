const options = ["🪨 Rock", "📄 Paper", "✂️ Scissors"];

let gameRunning = true;
let userScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const restartBtn = document.getElementById("restart");
const resultBar = document.querySelector(".result p");

const playerScoreUI = document.getElementById("player-score");
const computerScoreUI = document.getElementById("computer-score");

rockBtn.addEventListener("click", () => playGame("🪨 Rock"));
paperBtn.addEventListener("click", () => playGame("📄 Paper"));
scissorsBtn.addEventListener("click", () => playGame("✂️ Scissors"));
restartBtn.addEventListener("click", () => restartGame());

function getComputerChoice(){
    return options[Math.floor(Math.random() * options.length)];
}

function findWinner(userChoice, computerChoice){
    if (userChoice != computerChoice){
        if (userChoice === "🪨 Rock"){
            return computerChoice === "✂️ Scissors" ? "User" : "Computer";
        } else if (userChoice === "📄 Paper") {
            return computerChoice === "✂️ Scissors" ? "Computer" : "User";
        } else if (userChoice === "✂️ Scissors") {
            return computerChoice === "Rock" ? "Computer" : "User";
        }    
    }

    return "Draw";
}

function restartGame(){
    [userScore, computerScore] = [0, 0];
    playerScoreUI.textContent = "Player - 0";
    computerScoreUI.textContent = "0 - Computer";
    resultBar.style.display = "none";
    restartBtn.style.display = "none";
    gameRunning = true;
}

function checkGameEnd(){
    if (userScore == 5 || computerScore == 5){
        gameRunning = false;
        restartBtn.style.display = "block";
        resultBar.textContent = `GAME OVER! ${userScore == 5 ? "You win!" : "The Computer wins!"}`;
        resultBar.style.backgroundColor = computerScore == 5 ? "#d35f42" : "#6bd342";
    }
}

function playGame(userChoice){
    if (!gameRunning) return;

    const computerChoice = getComputerChoice();

    const result = findWinner(userChoice, computerChoice);

    if (result === "Draw"){
        resultBar.style.backgroundColor = "#d39942" // Orange
        resultBar.textContent = `You chose ${userChoice}, Computer chose ${computerChoice} - It's a draw!`;
        resultBar.style.display = "block";
    } else {

        switch (result){
            case "Computer":
                ++computerScore;
                computerScoreUI.textContent = computerScore + " - Computer";
                break;
            case "User":
                ++userScore;
                playerScoreUI.textContent = "Player - " + userScore;
                break;
        }

        resultBar.style.backgroundColor = result === "Computer" ? "#d35f42" : "#6bd342";
        resultBar.textContent = `You chose ${userChoice}, Computer chose ${computerChoice} - ${result} wins!`;
        resultBar.style.display = "block";

        checkGameEnd();
    }
    
}