const options = ["Rock", "Paper", "Scissors"];

const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")

function getComputerChoice(){
    return options[Math.floor(Math.random() * options.length)];
}

function findWinner(userChoice, computerChoice){
    if (userChoice != computerChoice){
        if (userChoice === "Rock"){
            return computerChoice === "Scissors" ? "User" : "Computer";
        } else if (userChoice === "Paper") {
            return computerChoice === "Scissors" ? "Computer" : "User";
        } else if (userChoice === "Scissors") {
            return computerChoice === "Rock" ? "Computer" : "User";
        }    
    }

    return "Draw";
}

function playGame(userChoice){
    const computerChoice = getComputerChoice()

    const result = findWinner(userChoice, computerChoice)

    if (result === "Draw"){
        console.log(`User chose ${userChoice}, Computer chose ${computerChoice} - It's a draw!`)
    } else {
        console.log(`User chose ${userChoice}, Computer chose ${computerChoice} - ${result} wins!`)
    }
    
}


rockBtn.addEventListener("click", () => playGame("Rock"));

paperBtn.addEventListener("click", () => playGame("Paper"));

scissorsBtn.addEventListener("click", () => playGame("Scissors"));