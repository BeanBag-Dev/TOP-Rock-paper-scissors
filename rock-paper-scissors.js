const options = ["🪨 Rock", "📄 Paper", "✂️ Scissors"];

let rockBtn, paperBtn, scissorsBtn, resultBar;

// This function only runs once EVERYTHING is ready
window.onload = () => {
    rockBtn = document.getElementById("rock");
    paperBtn = document.getElementById("paper");
    scissorsBtn = document.getElementById("scissors");
    resultBar = document.querySelector(".result p");

    // Add your listeners here
    rockBtn.addEventListener("click", () => playGame("Rock"));
    paperBtn.addEventListener("click", () => playGame("Paper"));
    scissorsBtn.addEventListener("click", () => playGame("Scissors"));
};

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
            return computerChoice === "🪨 Rock" ? "Computer" : "User";
        }    
    }

    return "Draw";
}

function playGame(userChoice){
    const computerChoice = getComputerChoice()

    const result = findWinner(userChoice, computerChoice)

    if (result === "Draw"){
        resultBar.style.backgroundColor = "#d39942" // Orange
        resultBar.textContent = `User chose ${userChoice}, Computer chose ${computerChoice} - It's a draw!`;
        resultBar.style.display = "block";
    } else {
        resultBar.style.backgroundColor = result === "Computer" ? "#d35f42" : "#6bd342";
        resultBar.textContent = `User chose ${userChoice}, Computer chose ${computerChoice} - ${result} wins!`;
        resultBar.style.display = "block";
    }
    
}