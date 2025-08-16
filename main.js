let humanChoice, computerChoice;
let humanScore = 0, computerScore = 0;

/* CREATE a function to get the computer choice */
function getComputerChoice() {
    const value = Math.floor((Math.random() * 100)) - 1;
    if (value <= 32) {
        computerChoice = 'rock';
    } else if (value <= 65) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}


/* CREATE a function to play a round */
// Determine result 
function playRound() {
        getComputerChoice();
        if (humanChoice === 'rock' && computerChoice === 'paper' ||
            humanChoice === 'paper' && computerChoice === 'scissors' ||
            humanChoice === 'scissors' && computerChoice === 'rock') {
            results.textContent = humanChoice + " gets beaten by " + computerChoice + ".";
            computerScore += 1;
        }
        else if (humanChoice === 'paper' && computerChoice === 'rock' ||
            humanChoice === 'scissors' && computerChoice === 'paper' ||
            humanChoice === 'rock' && computerChoice === 'scissors') {
            results.textContent = humanChoice + " beats " + computerChoice + ".";
            humanScore += 1;
        }
        else {
            results.textContent = humanChoice + " draws to " + computerChoice + ".";
        }

        results.textContent += `\nScore: You - ${humanScore}  vs. Computer -  ${computerScore}`;

        if (humanScore === 5) {
            results.textContent += "\n You Win! You beat the computer.";
            humanScore = 0, computerScore = 0;
        };
        if (computerScore === 5) {
            results.textContent += "\n You Lose! The Computer beat you."
            humanScore = 0, computerScore = 0;
        };
    }

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const results = document.querySelector(".results");
results.style.whiteSpace = "pre";
rock.addEventListener("click", event => {
    humanChoice = event.target.getAttribute("class");
    playRound();
});
paper.addEventListener("click", event => {
    humanChoice = event.target.getAttribute("class");
    playRound();
});
scissors.addEventListener("click", event => {
    humanChoice = event.target.getAttribute("class");
    playRound();
});

