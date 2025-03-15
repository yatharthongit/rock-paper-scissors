console.log("Lets Play Rock Paper Scissors!");

function getComputerChoice(){
    let random=Math.random()*10;
    if(random<=3.33) return "rock";
    else if(random<=6.66) return "paper";
    else return "scissor";
}

function getHumanChoice(){
    let choice=prompt("Please Enter Your Choice!");
    return choice;

}

let humanScore=0;
let computerScore=0;
