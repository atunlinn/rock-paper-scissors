let playerScore=0;
  let computerScore=0;


 const playerScoreSpan=document.querySelector('.player-span')   
 const computerScoreSpan=document.querySelector('.computer-span') 
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

function updateScore(playerScore,computerScore){


   playerScoreSpan.textContent=`player Score : ${playerScore}`
   computerScoreSpan.textContent=`computer Score : ${computerScore}`

}

 
function replayGame(playerSelection,computerSelection){
   console.clear()
   location.reload()
      playerScore=0;
      computerScore=0;
      updateScore(playerScore,computerScore)
      playRound(playerSelection,computerSelection)
   }


function winnerOfTheGame(playerScore,computerScore){
   const container1=document.querySelector(".container1")
  const content2= document.createElement('div');

   container1.append(content2)

   if(computerScore===5){
      const p=document.createElement("p")
      p.textContent="Computer wins the game."   ;
      container1.appendChild(p)

      const button=document.createElement('button')
      button.classList.add("replay")
   
      button.textContent="Replay"
      container1.appendChild(button)
   button.addEventListener('click',
   replayGame)
   disableClick()
     
     }
   
     
     if(playerScore===5){
      const p=document.createElement("p")
      p.textContent="Player wins the game."   ;
      container1.appendChild(p)

           
      const button=document.createElement('button')
      button.classList.add("replay")
   
      button.textContent="Replay"
      container1.appendChild(button)
   button.addEventListener('click',
   replayGame)
   disableClick()
      
   }
   
 
}





let playerSelection;
  let computerSelection;
  
   const buttons = document.querySelectorAll('button');

   buttons.forEach((button) => {
   button.addEventListener('click', () => {
     
       playerSelection= button.id ;
       computerSelection = getComputerChoice();
   playRound(playerSelection,computerSelection) 

   updateScore(playerScore,computerScore)
   
   winnerOfTheGame(playerScore,computerScore)
   }) })


   ;

   function disableClick(){
      buttons.forEach(button=>{
         button.disabled=true;
      })
   }

  


    function playRound(playerSelection,computerSelection){

   const container1=document.querySelector(".container1")
   const content= document.createElement('p');
   content.classList.add('content');

   
   if(playerSelection==="rock" && computerSelection==="rock"){
       const p=document.createElement("p")
       p.textContent="Tie";
       container1.append(p)
   }else if(playerSelection==="rock" && computerSelection==="paper"){
      computerScore++;
     const p=document.createElement("p")
    p.textContent="You lose.Paper beats rock.";
    container1.append(p)
   }else if(playerSelection==="rock" && computerSelection==="scissors"){
      playerScore++;
     const p=document.createElement("p")
       p.textContent="You win.Rock beats scissors";
      container1.appendChild(p)
    
   }else if(playerSelection==="paper" && computerSelection==="rock"){
      playerScore++;
      const p=document.createElement("p")
       p.textContent="You win.Paper beats Rock.";
      container1.appendChild(p)
      
     }else if(playerSelection==="paper" && computerSelection==="paper"){
      const p=document.createElement("p")
       p.textContent="Tie";
       container1.appendChild(p)

     }else if(playerSelection==="paper" && computerSelection==="scissors"){
      computerScore++;
      const p=document.createElement("p")
       p.textContent="You lose.Scissors beats Paper.";
       container1.appendChild(p)
      
   }else if(playerSelection==="scissors" && computerSelection==="rock"){
      computerScore++;
     const p=document.createElement("p")
       p.textContent= "You lose.Rock beats Scissors.";
       container1.appendChild(p)
      
     }else if(playerSelection==="scissors" && computerSelection==="paper"){
      playerScore++;
      const p=document.createElement("p")
       p.textContent="You win.Scissors beats paper.";
       container1.appendChild(p)
   
     }else if(playerSelection==="scissors" && computerSelection==="scissors"){
     const p=document.createElement("p")
      p.textContent="Tie";
      container1.appendChild(p)
   
   
   }


   }


