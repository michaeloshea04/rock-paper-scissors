//create player and computer selection variables
let playerSelection;
let computerSelection;



//function which randomly selects computer choice
function getComputerChoice() {
    let x = Math.floor((Math.random() * 3) + 1);
    result = "";
    if(x == 1) 
    {
        result = "rock"
        return result;
    }
    else if(x == 2)
    {
        result = "paper"
        return result
    }
    else if(x == 3) 
    {
        result = "scissors"
        return result
    }
    else
    {
        result = "Something went wrong"
        return result
    }
    
}


//convert getComputerChoice function to variable in string format
computerSelection = getComputerChoice().toString();

//helper function to check if two strings are equal
function compareString(arg1, arg2) {
    if(arg1 > arg2)
    {
        return 1;
    }
    else if(arg1 < arg2)
    {
        return -1;
    }
    else
    {
        return 0;
    }
}



//create game variables
let round = 0;
let playerScore = 0;
let computerScore = 0;



//accept playerSelection input
let btn1 = document.getElementById('rock');
  btn1.addEventListener('click', () =>{
    playerSelection = 'rock';
    computerSelection = getComputerChoice().toString();
    playGame();
  });

let btn2 = document.querySelector('#paper');
  btn2.addEventListener('click', () =>{
    playerSelection = 'paper';
    computerSelection = getComputerChoice().toString();
    playGame();
  });

  let btn3 = document.querySelector('#scissors');
  btn3.addEventListener('click', () =>{
    playerSelection = 'scissors';
    computerSelection = getComputerChoice().toString();
    playGame();
  });



//function containing logic about the paper, scissors, rock game
function playRound() {
    let result;
    let displayResult = document.getElementById("displayResult"); 
    let displayScore = document.getElementById("displayScore");  

    if((compareString(playerSelection, "rock") == 0)&&(compareString(computerSelection, "scissors") == 0))
    {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerScore ++;
    }
    else if((compareString(playerSelection, "rock") == 0)&&(compareString(computerSelection, "paper") == 0))
    {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore ++;
    }
    else if((compareString(playerSelection, "paper") == 0)&&(compareString(computerSelection, "rock") == 0))
    {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerScore ++;
    }
    else if((compareString(playerSelection, "paper") == 0)&&(compareString(computerSelection, "scissors") == 0))
    {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore ++;
    }
    else if((compareString(playerSelection, "scissors") == 0)&&(compareString(computerSelection, "paper") == 0))
    {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;        
        playerScore ++;
    }
    else if((compareString(playerSelection, "scissors") == 0)&&(compareString(computerSelection, "rock") == 0))
    {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore ++;
    }
    else
    {
        result = `It's a draw! ${computerSelection} draws with ${playerSelection}.`;
    }

    

    // Display the result
    displayResult.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. ${result}`;
    displayScore.textContent = `Player score: ${playerScore}.  Computer score: ${computerScore}`;

}



let output = document.getElementById("output");

function playGame(){
    
    playRound();
    
    if (playerScore == 5){
        output.textContent = "You Won the Game! Congrats";
        playerScore = 0;
        computerScore = 0;
        playerScore.textContent = `Player Score: ${playerScore}`;
        computerScore.textContent = `Computer Score: ${computerScore}`;
        
    }
    else if (computerScore == 5){
        output.textContent = "You Lost the game:/ Maybe find something else to do?"
        playerScore = 0;
        computerScore = 0;
        playerScore.textContent = `Player Score: ${playerScore}`;
        computerScore.textContent = `Computer Score: ${computerScore}`;
        
    }

}