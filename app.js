
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {

    let options = ["rock", "Paper", "Scissor"];
    let randIndex = Math.floor(Math.random() * 3);
    return options[randIndex]

}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game Was Draw. play again !";
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win !");
        msg.innerText = "You Win !";
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorePara.innerText = compScore
        console.log("You Lose");
        msg.innerText = "You Lose !";
        msg.style.backgroundColor = "red"
    }
}




const playGame = (userChoice) => {

    console.log("user Choice =", userChoice);
    let compChoice = genCompChoice();
    console.log("comp Choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissors, paper
        userWin = compChoice === "paper" ? false : true ;  
        } else if(userChoice === "Paper") {
            //rock, scissor
         userWin = compChoice === "Scissors" ? false : true ; 
        } else  {
            // rock, Paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) =>{
choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id")
  playGame(userChoice)

});

});