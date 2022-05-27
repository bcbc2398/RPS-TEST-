const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-Score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(comp). You Win!`;
    
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}(user) loses to ${convertToWord(computerChoice)}(comp). You lost!`;
    

}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}(user) equals ${convertToWord(computerChoice)}(comp). It's a tie!`;   
}

function game(userChoice) {
    const getComputerChoice =getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, getComputerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, getComputerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, getComputerChoice);
            break;
    }

}


function main() {
    rock_div.addEventListener('click', function() {
        game("r");
        console.log("hey you clicked on rock")
    })

    paper_div.addEventListener('click', function() {
        game("p");
        console.log("hey you clicked on paper");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
        console.log("hey you clicked on scissors");
    })
}

main();