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
    let humanChoice = prompt("Rock, paper or scissors?", "rock"); //delete default
    let humanChoiceLower = humanChoice.toLowerCase();
    return humanChoiceLower;
    console.log(humanChoiceLower); // delete
}

function playRound() {
    let computer = getComputerChoice();
    let human = getHumanChoice();
    console.log(`Computer choice: ${computer} and human choice: ${human}.`); // delete
    // 9 possibiities in total, 3 go on ties.
    if ( computer === human) {
        console.log(`It is a tie! Both chose: ${computer}`);
        console.log(`Computer: ${computerScore} - Human: ${humanScore}.`);
    } else if( computer === "rock" && human === "scissors"
             || computer === "paper" && human === "rock"
             || computer === "scissors" && human === "paper") {
        console.log(`Computer wins with: ${computer}, as expected!.`);
        ++computerScore;
        console.log(`Computer: ${computerScore} - Human: ${humanScore}.`);
    } else {                    // This accepts random values and gives you the win
        console.log(`Human wins with: ${human}, as expected!.`);
        ++humanScore;
        console.log(`Computer: ${computerScore} - Human: ${humanScore}.`);
    }
}

playRound();
