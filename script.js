const computScore = document.getElementById('cScore');
const yourScore = document.getElementById('pScore');

const choiceRock = document.getElementById('rock');
const choicePaper = document.getElementById('paper');
const choiceScissor = document.getElementById('scissor');
const chance = document.getElementById('chances');

const youChose = document.getElementById('yourChoice');
const compChose = document.getElementById('compChoice');
const result = document.getElementById('finalResult');

const resetButton = document.getElementById('reset');

let playerScore = 0;
let compScore = 0;
let userChoice;
let computerChoice;
let roundCount = 0;
const totalRound = 5;

function main() {
    getUserChoice();
    resetButton.addEventListener('click', resetGame);
}
main();

function getUserChoice() {
    choiceRock.addEventListener("click", function () {
        userChoice = "Rock";
        playRound();
    });

    choicePaper.addEventListener("click", function () {
        userChoice = "Paper";
        playRound();
    });

    choiceScissor.addEventListener("click", function () {
        userChoice = "Scissor";
        playRound();
    });
}

function playRound() {
    if (roundCount < totalRound) {
        getComputerChoice();
        compareChoice();
        updateScores();
        roundCount++;
        updateChanceCounter();
        if (roundCount === totalRound) {
            displayFinalResult();
        }
    }
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const random = Math.floor(Math.random() * 3);
    computerChoice = choices[random];
}

function compareChoice() {
    youChose.textContent = `You Chose: ${userChoice}`;
    compChose.textContent = `Computer Chose: ${computerChoice}`;

    if ((userChoice == "Rock" && computerChoice == "Scissor") ||
        (userChoice == "Paper" && computerChoice == "Rock") ||
        (userChoice == "Scissor" && computerChoice == "Paper")) {
        result.textContent = "You Won!";
        playerScore++;
    } else if (userChoice == computerChoice) {
        result.textContent = "It's a Draw!";
    } else {
        result.textContent = "Computer Won!";
        compScore++;
    }
}

function updateScores() {
    yourScore.textContent = playerScore;
    computScore.textContent = compScore;
}

function updateChanceCounter() {
    chance.textContent = `(Chances Left: ${totalRound - roundCount})`;
}

function displayFinalResult() {
    if (playerScore > compScore) {
        result.textContent = "Congratulations! You won the game!";
    } else if (compScore > playerScore) {
        result.textContent = "Computer wins the game!";
    } else {
        result.textContent = "It's a tie!";
    }
}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    roundCount = 0;
    updateScores();
    updateChanceCounter();
}
