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
    console.log(resultFloored); // delete
    return choice;
}

console.log(getComputerChoice());
