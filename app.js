
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
    alert(result)          
    
}

//alert(`Computer chooses ${getComputerChoice()}`);

//convert getComputerChoice function to variable in string format
const computerSelection = getComputerChoice().toString();

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

//create player and computer scores
let playerScore = 0;
let computerScore = 0;

//accept playerSelection input
//let playerSelection = prompt("Tell me what you got!!");

//alert(`Player selection is ${playerSelection}`);

//function containing logic about the paper, scissors, rock game
function playRound(playerSelection, computerSelection) {
    result = "";
    alert(`Player selected ${playerSelection}`);
    alert(`Computer selected ${computerSelection}`);   

    if((compareString(playerSelection, "rock") == 0)&&(compareString(computerSelection, "scissors") == 0))
    {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
        console.log(result);
        return playerScore += 1;
        
    }
    else if((compareString(playerSelection, "rock") == 0)&&(compareString(computerSelection, "paper") == 0))
    {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        console.log(result);
        return computerScore += 1;
    }
    else if((compareString(playerSelection, "paper") == 0)&&(compareString(computerSelection, "rock") == 0))
    {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
        console.log(result);
        return playerScore += 1;
    }
    else if((compareString(playerSelection, "paper") == 0)&&(compareString(computerSelection, "scissors") == 0))
    {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        console.log(result);
        return computerScore += 1;
    }
    else if((compareString(playerSelection, "scissors") == 0)&&(compareString(computerSelection, "paper") == 0))
    {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;        
        console.log(result);
        return playerScore += 1;
    }
    else if((compareString(playerSelection, "scissors") == 0)&&(compareString(computerSelection, "rock") == 0))
    {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        console.log(result);        
        return computerScore += 1;
    }
    else
    {
        result = `It's a draw! ${computerSelection} draws with ${playerSelection}.`;
        console.log(result);
        return computerScore +=0;  
    }

}

//console.log(playRound(playerSelection, computerSelection));



function game() {   

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice: rock, paper or scissors.");
        console.log(`Round ${i+1}`);
        console.log(`Player selection = ${playerSelection}`);
        console.log(`Computer selection = ${computerSelection}`);
        playRound(playerSelection, computerSelection);
        console.log(`Player Score: ${playerScore} - Computer Score: ${computerScore}`); 
        console.log("*******************************************************************")       

    }

    if(playerScore > computerScore)
    {
        console.log("Player wins!");
        console.log(`Player Score: ${playerScore} - Computer Score: ${computerScore}`); 
    }
    else if(playerScore < computerScore)
    {
        console.log("Computer wins!")
        console.log(`Player Score: ${playerScore} - Computer Score: ${computerScore}`); 
    }
    else
    {
        console.log("It's a draw.")
        console.log(`Player Score: ${playerScore} - Computer Score: ${computerScore}`); 
    }
    
    
}

//console.log(game());



  let btn1 = document.querySelector('#btn_1');
  btn1.addEventListener('click', () =>{
    document.getElementById("displayResult").innerHTML = "You chose Rock"
  });

  let btn2 = document.querySelector('#btn_2');
  btn2.addEventListener('click', () =>{
    document.getElementById("displayResult").innerHTML = "You chose Paper"
  });

  let btn3 = document.querySelector('#btn_3');
  btn3.addEventListener('click', () =>{
    document.getElementById("displayResult").innerHTML = "You chose Scissors"
  });
