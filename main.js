playGame();

/* CREATE a function to get the computer choice */
function getComputerChoice() {
    // CALCULATE a value to determine the choice
    const value = Math.floor((Math.random() * 100)) - 1;
    let choice = '';
    // RETURN 'rock', 'paper', or 'scissors' as string 
    if (value <= 32) {
        choice = 'rock';
    } else if (value <= 65) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    return choice;
}

/* CREATE a function to get the user choice */
function getHumanChoice() {
    // DETERMINE the value entered by user (USE prompt)
    const choice = prompt('What would you like to play? Choose: (Rock/Paper/Scissors)',)
    return choice;
}

/* CREATE a function to play the entire game */
// NAME the function playGame
function playGame() {
        /* CREATE two variables to keep track of scores */
        // INITIALIZE both variables to 0 
        let humanScore = 0, computerScore = 0;
    // MOVE the playRound function and score variables into this function 
            /* CREATE a function to play a round */
                // NAME the function playRound
                // USE humanChoice and computerChoice as parameters to take arguments
        function playRound(humanChoice, computerChoice) {
            // MAKE humanChoice parameter case-insensitive
            humanChoice.toLowerCase();
            // OUTPUT in the console a string to show round winner
            // INCREASE the winner's score
            if (humanChoice === 'rock' && computerChoice === 'paper' || 
                humanChoice === 'paper' && computerChoice === 'scissors' || 
                humanChoice === 'scissors' && computerChoice === 'rock') {
                        console.log("You Lose! " + humanChoice + " gets beaten by " + computerChoice + ".");
                        computerScore += 1;
                } 
            else if (humanChoice === 'paper' && computerChoice === 'rock' || 
                    humanChoice === 'scissors' && computerChoice === 'paper' || 
                    humanChoice === 'rock' && computerChoice === 'scissors') {
                        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
                        humanScore += 1;
                } 
            else {
                        console.log("You Drew! You choose " + humanChoice + " into " + computerChoice + ".")
                } 
                console.log("Score: You - " + humanScore + " vs. Computer - " + computerScore)
                }
                // CALL playRound function 5 times
                playRound(getHumanChoice(), getComputerChoice());
                playRound(getHumanChoice(), getComputerChoice());
                playRound(getHumanChoice(), getComputerChoice());
                playRound(getHumanChoice(), getComputerChoice());
                playRound(getHumanChoice(), getComputerChoice());
}
