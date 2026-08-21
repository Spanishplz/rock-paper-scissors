let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = "";
    let result = Math.random()*(3 - 1 + 1) + 1;
    let resultFloored = Math.floor(result);

    if (resultFloored === 1) {
        choice = "rock";
    } else if (resultFloored === 2){
        choice = "paper";
    } else {
        choice = "scissors";
    }
    // console.log(resultFloored); // delete
    return choice;
}

// console.log(getComputerChoice()); // delete

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?");
    let humanChoiceLower = humanChoice.toLowerCase();
    return humanChoiceLower;
    console.log(humanChoiceLower); // delete
}

function playRound() {
    let computer = getComputerChoice();
    let human = getHumanChoice();
    console.log(`Computer choice: ${computer} and human choice: ${human}.`);
}

playRound();
