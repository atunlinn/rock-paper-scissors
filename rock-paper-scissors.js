function getComputerChoice(){
    let randomNumber=Math.random();
   

   
 if(randomNumber>0 &&randomNumber<1/3){ 
      return  "Rock";
    
 }else if(randomNumber>1/3 && randomNumber<2/3){
  
    return "Paper";
 }else if(randomNumber>2/3&& randomNumber<1){
 
    return "Scissors";
}
        
 
}
getComputerChoice();

function playRound(playerSelection, computerSelection){
  if(playerSelection==="Rock" && computerSelection==="Rock"){
   return "Tie";
  }else if(playerSelection=="Rock" && computerSelection==="Paper"){
   return "You lose.Paper beats rock.";
  }else if(playerSelection==="Rock" && computerSelection==="Scissors"){
   return "You win.Rock beats scissors";
  }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


