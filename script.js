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


function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?");
    let humanChoiceLower = humanChoice.toLowerCase();
    return humanChoiceLower;
    console.log(humanChoiceLower); // delete
}

function playRound() {
    let computer = getComputerChoice();
    let human = getHumanChoice();
    console.log(`Round ${round}`);
    console.log(`Computer: ${computer} - human: ${human}.`);
    // 9 possibiities in total, 3 go on ties.
    if ( computer === human) {
        console.log(`It is a tie! Both chose: ${computer}`);
        console.log(`Computer: ${computerScore} - Human: ${humanScore}.`);
    } else if( computer === "rock" && human === "scissors"
             || computer === "paper" && human === "rock"
             || computer === "scissors" && human === "paper") {
        console.log(`Computer wins with ${computer}.`);
        ++computerScore;
        console.log(`Computer: ${computerScore} - Human: ${humanScore}.`);
    } else {                    // This accepts random values and gives you the win
        console.log(`Human wins with ${human}.`);
        ++humanScore;
        console.log(`Computer: ${computerScore} - Human: ${humanScore}.`);
    }
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

const imagesArray = Array.from(images);

// set a value attribute to the images
console.log(imagesArray);
imagesArray.forEach((element, index) => {
    console.log(element);;
    element.setAttribute("value", `${element.id}`);
});

