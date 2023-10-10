let playerScore=0;
  let computerScore=0;

function getComputerChoice(){
    let randomNumber=Math.random();
   

   
 if(randomNumber>0 && randomNumber<1/3){ 
      return  "rock";
    
 }else if(randomNumber>1/3 && randomNumber<2/3){
  
    return "paper";
 }else if(randomNumber>2/3&& randomNumber<1){
 
    return "scissors";
}
        
 
}
getComputerChoice();


function playRound(playerSelection,computerSelection){
   if(playerSelection==="rock" && computerSelection==="rock"){
    return "Tie";
   }else if(playerSelection==="rock" && computerSelection==="paper"){
      computerScore++;
    return "You lose.Paper beats rock.";
   }else if(playerSelection==="rock" && computerSelection==="scissors"){
      playerScore++;
    return "You win.Rock beats scissors";
   }else if(playerSelection==="paper" && computerSelection==="rock"){
      playerScore++;
      return "You win.Paper beats Rock.";
     }else if(playerSelection==="paper" && computerSelection==="paper"){
      return "Tie";
     }else if(playerSelection==="paper" && computerSelection==="scissors"){
      computerScore++;
      return "You lose.Scissors beats Paper.";
   }else if(playerSelection==="scissors" && computerSelection==="rock"){
      computerScore++;
      return "You lose.Rock beats Scissors.";
     }else if(playerSelection==="scissors" && computerSelection==="paper"){
      playerScore++;
      return "You win.Scissors beats paper.";
     }else if(playerSelection==="scissors" && computerSelection==="scissors"){
      return "Tie";
}}
 
 

 
const playerSelection =prompt("Choose", "Rock").toLowerCase()

function game(){
  
  
  for(let i=0;i<5;i++){
   

   
   const computerSelection = getComputerChoice();
   console.log('1',playRound(playerSelection,computerSelection) ) ;
  }
   
  if(computerScore > playerScore){
   return "Computer wins the game." ;
  }else if(computerScore < playerScore){
   return "Player wins the game." ;
  }else if(computerScore===playerScore){
   return "Draw" }
  

   
}
console.log(game());
