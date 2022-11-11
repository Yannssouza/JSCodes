let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function difference(a, b) {
    return Math.abs(a - b);
}

function compareGuesses(humanGuess, computerGuess, targetGuess) {
    targetGuess = generateTarget();
    const humanDifference = difference(humanGuess, targetGuess)
    const computerDifference = difference(computerGuess, targetGuess)
    return humanDifference <= computerDifference;
}

function updateScore(winner) {
    if (winner === "human") {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}
