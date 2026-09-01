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
        roundResultSpan.textContent = `It is a tie!`;
    } else if( computer === "rock" && human === "scissors"
             || computer === "paper" && human === "rock"
             || computer === "scissors" && human === "paper") {
        console.log(`Computer wins with ${computer}.`);
        ++computerScore;
        console.log(`Computer: ${computerScore} - Human: ${humanScore}.`);
        roundResultSpan.textContent = `computer wins!`;
    } else {                    // This accepts random values and gives you the win
        console.log(`Human wins with ${human}.`);
        ++humanScore;
        console.log(`Computer: ${computerScore} - Human: ${humanScore}.`);
        roundResultSpan.textContent = `human wins!`;

    }
    computerScoreSpan.textContent = computerScore;
    humanScoreSpan.textContent = humanScore;
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
const roundNumber = document.querySelector("#round");
const roundTitle = document.querySelector("#roundTitle");

body.addEventListener("click", playARound);

function playARound(e) {
    if(round > 4) {
        // return console.log("game is over!");
        body.removeEventListener("click", playARound);
        reset.classList.toggle("hide");

    }
        let targetTag = e.target.tagName;
        let parentId = e.target.parentNode.id;
        let humanChoice = e.target.getAttribute("value");
        // value for human choice
        if(targetTag === "IMG" && parentId === "human") {
            playerSelection.textContent = `${humanChoice}`;
            let computerValue = getComputerChoice();
            computerSelection.textContent = computerValue;
            playRound(humanChoice, computerValue);
            round++; 
            console.log(round);
            if(round < 6) {
                roundNumber.textContent = round;
            } else {
                roundTitle.textContent = "MATCH OVER!";
                roundNumber.textContent = "";
                gameResult();
            }
        };
};


const resultDiv = document.querySelector("#result");

function gameResult(event) {
    if(computerScore === humanScore) {
        console.log(`It is a tie with ${computerScore} points each.`);
        resultDiv.textContent = `It is a tie with ${computerScore} points each.`;
    } else if (computerScore > humanScore) {
        console.log(`Computer wins with ${computerScore} points.`);
        resultDiv.textContent = `Computer wins with ${computerScore} points.`;
    } else {
        console.log(`Player wins with ${humanScore} points.`);
        resultDiv.textContent = `Player wins with ${humanScore} points.`;
    };
}


const reset = document.querySelector("button#restart");
function buttonAppear(e) {
    console.log(e);
    e.target.classList.toggle("hide");
}


reset.addEventListener("click", resetAll);

function resetAll() {
    humanScore = 0;
    computerScore = 0;
    round = 1;
    computerScoreSpan.textContent = "0";
    humanScoreSpan.textContent = "0";
    resultDiv.textContent = ``;
    playerSelection.textContent =  "select!";
    computerSelection.textContent = "...processing";
    roundResultSpan.textContent = ``;
    body.addEventListener("click", playARound);
    reset.classList.toggle("hide");

}

