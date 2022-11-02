
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

//hard coded player selection
const playerSelection = "rock";

//convert getComputerChoice function to variable in string format
const computerSelection = getComputerChoice().toString();

//log both variables to the console
console.log(`Player selection = ${playerSelection}`);
console.log(`Computer selection = ${computerSelection}`);

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

//function containing logic about the paper, scissors, rock game
function playRoundTest(playerSelection, computerSelection) {
    result = ""

    if((compareString(playerSelection, "rock") == 0)&&(compareString(computerSelection, "scissors") == 0))
    {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
        return result;
    }
    else if((compareString(playerSelection, "rock") == 0)&&(compareString(computerSelection, "paper") == 0))
    {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        return result;
    }
    else if((compareString(playerSelection, "paper") == 0)&&(compareString(computerSelection, "rock") == 0))
    {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
        return result;
    }
    else if((compareString(playerSelection, "paper") == 0)&&(compareString(computerSelection, "scissors") == 0))
    {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        return result;
    }
    else if((compareString(playerSelection, "scissors") == 0)&&(compareString(computerSelection, "paper") == 0))
    {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
        return result;
    }
    else if((compareString(playerSelection, "scissors") == 0)&&(compareString(computerSelection, "rock") == 0))
    {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        return result;
    }
    else
    {
        result = `It's a draw! ${computerSelection} draws with ${playerSelection}.`;
        return result;
    }

}

console.log(playRoundTest(playerSelection, computerSelection));