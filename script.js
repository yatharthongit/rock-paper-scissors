
let humanScore=0;
let computerScore=0;

let winner=document.createElement("p");

let score=document.createElement("p");
score.classList.add("score");

let choice=document.createElement("p");
score.classList.add("choice");

let result=document.createElement("p");
score.classList.add("result");

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
    winner.textContent=``;
    humanChoice=humanChoice.toLowerCase();

    if(humanChoice===computerChoice){
        choice.textContent=`Your Choice: ${humanChoice} , Computer's Choice: ${computerChoice}`;
        result.textContent=`Oops! It's a Tie!`;
        score.textContent=`Your Score: ${humanScore} , Computer's Score: ${computerScore}`;
    }
    else if(humanChoice==="rock"){
        if(computerChoice==="paper"){
        choice.textContent=`Your Choice: ${humanChoice} , Computer's Choice: ${computerChoice}`;   
        result.textContent=`You lose! Paper beats Rock`;
        computerScore=computerScore+1;
        score.textContent=`Your Score: ${humanScore} , Computer's Score: ${computerScore}`;
        }
        else{
        choice.textContent=`Your Choice: ${humanChoice} , Computer's Choice: ${computerChoice}`;
        result.textContent=`You Win! Rock beats Scissor`;
        humanScore=humanScore+1;
        score.textContent=`Your Score: ${humanScore} , Computer's Score: ${computerScore}`;
        }
    }
    else if(humanChoice==="paper"){
        if(computerChoice==="scissor"){
            choice.textContent=`Your Choice: ${humanChoice} , Computer's Choice: ${computerChoice}`;
            result.textContent=`You lose! Scissor beats Paper`;
            computerScore=computerScore+1;
            score.textContent=`Your Score: ${humanScore} , Computer's Score: ${computerScore}`;
        }
            else{
            choice.textContent=`Your Choice: ${humanChoice} , Computer's Choice: ${computerChoice}`;
            result.textContent=`You Win! Paper beats Rock`;
            humanScore=humanScore+1;
            score.textContent=`Your Score: ${humanScore} , Computer's Score: ${computerScore}`;
        }
    }
    else{
        if(computerChoice==="rock"){
            choice.textContent=`Your Choice: ${humanChoice} , Computer's Choice: ${computerChoice}`;
            result.textContent=`You lose! Rock beats Scissor`;
            computerScore=computerScore+1;
            score.textContent=`Your Score: ${humanScore} , Computer's Score: ${computerScore}`;
        }
            else{
            choice.textContent=`Your Choice: ${humanChoice} , Computer's Choice: ${computerChoice}`;
           result.textContent=`You Win! Scissor beats Paper`;
            humanScore=humanScore+1;
            score.textContent=`Your Score: ${humanScore} , Computer's Score: ${computerScore}`;
        }
    }

    if(humanScore==5){
        winner.textContent=`You Win!`;
        humanScore=0;
        computerScore=0;
        container.appendChild(winner);
    }else if(computerScore==5){
        winner.textContent=`You Lose!`;
        humanScore=0;
        computerScore=0;
        container.appendChild(winner);
    }
    
}


/*function playGame(){
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
}*/


let rock=document.querySelector("#rck");
rock.addEventListener("click",()=>{
    playRound("rock",getComputerChoice());
});

let paper=document.querySelector("#ppr");
paper.addEventListener("click",()=> {
    playRound("paper",getComputerChoice());
});

let scissor=document.querySelector("#scr");
scissor.addEventListener("click",()=>{
    playRound("scissor",getComputerChoice());
});

const container=document.createElement("div");
const body=document.querySelector("body");
body.appendChild(container);
container.appendChild(choice);
container.appendChild(result);
container.appendChild(score);






