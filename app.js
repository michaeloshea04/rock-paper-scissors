

function getComputerChoice() {
    let randNumb =  Math.floor(Math.random() * 3);

    if(randNumb == 0)
    {
        return "rock";
    }
    else if(randNumb == 1)
    {
        return "paper";
    }
    else if(randNumb == 2)
    {
        return "scissors"
    }
    else
    {
        return ""
    }

}

console.log(getComputerChoice())

