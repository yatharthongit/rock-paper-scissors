console.log("Lets Play Rock Paper Scissors!");

let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let random=Math.floor(Math.random()*3)+1;
    if(random==1) return "rock";
    else if(random==2) return "paper";
    else return "scissor";
}

function getHumanChoice(){
    let choice=prompt("Choose Between Rock, Paper and Scissor!");
    return choice;
}


function playRound(humanChoice, computerChoice){
    humanChoice=humanChoice.toLowerCase();

    if(humanChoice===computerChoice){
        console.log("Your Choice: "+ humanChoice +" , Computer's Choice: " + computerChoice);
        console.log("Oops! It's a Tie!");
        humanScore=humanScore+1;
        computerScore=computerScore+1;
        console.log("Your Score: "+ humanScore +" , Computer's Score: " + computerScore);
    }
    else if(humanChoice==="rock"){
        if(computerChoice==="paper"){
        console.log("Your Choice: "+ humanChoice +" , Computer's Choice: " + computerChoice);   
        console.log("You lose! Paper beats Rock");
        computerScore=computerScore+1;
        console.log("Your Score: "+ humanScore +" , Computer's Score: " + computerScore);
        }
        else{
        console.log("Your Choice: "+ humanChoice +" , Computer's Choice: " + computerChoice);
        console.log("You Win! Rock beats Scissor");
        humanScore=humanScore+1;
        console.log("Your Score: "+ humanScore +" , Computer's Score: " + computerScore);
        }
    }
    else if(humanChoice==="paper"){
        if(computerChoice==="scissor"){
            console.log("Your Choice: "+ humanChoice +" , Computer's Choice: " + computerChoice);
            console.log("You lose! Scissor beats Paper");
            computerScore=computerScore+1;
            console.log("Your Score: "+ humanScore +" , Computer's Score: " + computerScore);
            }
            else{
            console.log("Your Choice: "+ humanChoice +" , Computer's Choice: " + computerChoice);
            console.log("You Win! Paper beats Rock");
            humanScore=humanScore+1;
            console.log("Your Score: "+ humanScore +" , Computer's Score: " + computerScore);
            }
    }
    else{
        if(computerChoice==="rock"){
            console.log("Your Choice: "+ humanChoice +" , Computer's Choice: " + computerChoice);
            console.log("You lose! Rock beats Scissor");
            computerScore=computerScore+1;
            console.log("Your Score: "+ humanScore +" , Computer's Score: " + computerScore);
            }
            else{
            console.log("Your Choice: "+ humanChoice +" , Computer's Choice: " + computerChoice);
            console.log("You Win! Scissor beats Paper");
            humanScore=humanScore+1;
            console.log("Your Score: "+ humanScore +" , Computer's Score: " + computerScore);
            }
    }
}


function playGame(){
    let i=1;
    while(i<=5){
        let manChoice=getHumanChoice();
        let botChoice=getComputerChoice();

        playRound(manChoice,botChoice);
        console.log("Round "+i+" of 5");
        console.log(" ");
        i++;
    }

    if(humanScore>computerScore) console.log("Congratulations! You Win!");
    else if(humanScore<computerScore) console.log("You Lose! Play Again!");
    else console.log("Round Over! It's a Tie! Play Again!");
}


playGame();