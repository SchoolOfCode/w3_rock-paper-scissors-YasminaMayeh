// Dom variables qu
const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const totalResult = document.getElementById(".totalResult");
const resultText= document.querySelector (".result");
const submitButton = document.querySelector (".submit");
const playerName = document.querySelector (".playerName");
const points = document.querySelector (".points");
const capitalizeFirstLetter = ([ first, ...rest ], locale = navigator.language) =>
  first.toLocaleUpperCase(locale) + rest.join('')

let win = 0 
let lose = 0
let draw = 0
let total = 0

function whoWins(computerMove, playerMove ){
    if (computerMove == "rock") {
        if (playerMove == "paper"){
            return 1;
    
        } else if (playerMove == "rock"){
            return 0
    
        }else if (playerMove == "scissors"){
            return -1;
        }
    }
    
    if (computerMove == "paper") {
        if (playerMove == "rock"){
            return -1;

        } else if (playerMove == "paper"){
            return 0;


        }else if (playerMove == "scissors"){
            return 1;
        }
    }

    if (computerMove == "scissors") {
        if (playerMove == "rock"){
            return 1;

        } else if (playerMove == "scissors"){
            return 0;

        }else if (playerMove == "paper"){
            return -1;
        }
    }

}

function randomMove(){
  
    let rNumber = Math.floor(Math.random() * 3) // 0, 1 or 2
    if (rNumber == 0){
        return "rock"
    }else if (rNumber == 1){
        return "scissors"
    }else if (rNumber == 2){
        return "paper"
    }
}

function  start (playerMove) {
    let computerMove = randomMove();
    let result = whoWins(computerMove, playerMove)
    if (result==1) {
        win += 1
        resultText.innerText = "Winner! " + playerMove + " beats " + computerMove
    } else if (result == -1 ) {
        lose += 1
        resultText.innerText = "Loser  "+ computerMove + " beats " + playerMove
    } else if (result == 0 ) {
        draw += 1
        resultText.innerText = "Draw. You both chose " + playerMove 
    } 
    total +=1 
    updateScoreboard (win, lose)

}

rockButton.addEventListener("click" , function(){start("rock")}); 
paperButton.addEventListener("click" ,function(){start("paper")} )
scissorsButton.addEventListener("click" , function(){start("scissors")})
let username = "Player "
submitButton.addEventListener ("click", submit)
resetButton.addEventListener ("click", reset)

function submit (){
    username =  document.getElementById("input").value;
    if (username === "") {
        username = "Player"
    }
    playerName.innerText = username[0].toUpperCase()+ username.substring(1)
    updateScoreboard ( 0 , 0 )
    document.getElementById("input").value = ""
   
}; 

function reset (){
    updateScoreboard( 0 , 0 )
    win = 0 
    lose = 0
    draw = 0
    total = 0
    playerName.innerHTML = "Player"

}


function updateScoreboard (playerPoints, computerPoints, ){
    points.innerText = playerPoints  + " - " + computerPoints
}
