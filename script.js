let humanScore = 0;
let computerScore = 0;
let round = 1;

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
    return choice;
}


// function getHumanChoice() {
//     let humanChoice = prompt("Rock, paper or scissors?");
//     let humanChoiceLower = humanChoice.toLowerCase();
//     return humanChoiceLower;
//     console.log(humanChoiceLower); // delete
// }

// score references
const humanScoreSpan = document.querySelector("#playerScore");
const computerScoreSpan = document.querySelector("#computerScore");
const roundResultSpan = document.querySelector("#roundResult");

function playRound(human, computer) {
    console.log(`Round ${round}`);
    console.log(`Computer: ${computer} - human: ${human}.`);
    // 9 possibiities in total, 3 go on ties.
    if ( computer === human) {
        console.log(`It is a tie! Both chose: ${computer}`);
        console.log(`Computer: ${computerScore} - Human: ${humanScore}.`);
        roundResultSpan.textContent = `It is a tie. Both chose ${computer}!`;
    } else if( computer === "rock" && human === "scissors"
             || computer === "paper" && human === "rock"
             || computer === "scissors" && human === "paper") {
        console.log(`Computer wins with ${computer}.`);
        ++computerScore;
        console.log(`Computer: ${computerScore} - Human: ${humanScore}.`);
        roundResultSpan.textContent = `Computer wins with ${computer}`;
    } else {                    // This accepts random values and gives you the win
        console.log(`Human wins with ${human}.`);
        ++humanScore;
        console.log(`Computer: ${computerScore} - Human: ${humanScore}.`);
        roundResultSpan.textContent = `Human wins with ${human}`;

    }
    computerScoreSpan.textContent = computerScore;
    humanScoreSpan.textContent = humanScore;
}

function playGame() {
    while(round < 6){
        playRound();
        round++;
    }
    if(computerScore === humanScore) {
        console.log(`It is a tie with ${computerScore} points each.`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins with ${computerScore} points.`);
    } else {
        console.log(`Human wins with ${humanScore} points.`);
    };
}

// playGame();

const images = document.querySelectorAll("#human img");
const versus = document.querySelector("#verses");

// set a value attribute to the images
const imagesArray = Array.from(images);
imagesArray.forEach((element, index) => {
    element.setAttribute("value", `${element.id}`);
});

// body event listener

const body = document.querySelector("body");
const playerSelection = document.querySelector("#playerSelection");
const computerSelection = document.querySelector("#computerSelection");
body.addEventListener("click", (e) => {
    let targetTag = e.target.tagName;
    let parentId = e.target.parentNode.id;
    let humanChoice = e.target.getAttribute("value");
// value for human choice
        if(targetTag === "IMG" && parentId === "human") {
            playerSelection.textContent = `${humanChoice}`;
        let computerValue = getComputerChoice();
            computerSelection.textContent = computerValue;
            console.log(`Player: ${humanChoice} | Computer: ${computerValue}`);

            playRound(humanChoice, computerValue);
    }

});
