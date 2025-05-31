// let compChoice;
function generateCompChoice(){
   
let randomNum= Math.random()*3;

// let compChoice;
if(randomNum>0 && randomNum<1){
    return 'Bat';
    // console.log('comp choice is Bat');
    
}else if(randomNum>1 && randomNum<2){

     return 'Ball';
    // console.log('comp choice is Ball');
}
else{
  return'Stamp';
    // console.log('comp choice is Stamp');
}
}   
let scoreStr = localStorage.getItem('score');
let score;
 resetScore(scoreStr);

function resetScore(scoreStr){
 score=scoreStr ? JSON.parse(scoreStr):{
   win:0,
   lost:0,
   tie:0,
};
score.displayScore=function(){
   return`score:won ${score.win},lost:${score.lost} ,Tie ${score.tie}`;
}
showResult();
}

function getResult(userMove,computerMove){
   if(userMove==='Bat'){
    if (computerMove === 'Bat'){
      score.tie++;
    return('its a tie');
    
}
else if(computerMove=== 'Ball'){
    score.win++;
  return('user won');
 
}
else if(computerMove=== 'Stamp'){
   score.lost++
   return('computer has won');
    
}
  
// for ball
}else if(userMove==='Ball'){
        if (computerMove === 'Bat'){
          score.lost++
    return('computer has won');
    
}
else if(computerMove === 'Ball'){
   score.tie++;
  return('its a tie');
    
}
else if(computerMove=== 'Stamp'){
   score.win++;
   return('user won');
    
}
   }
   else{
    if (computerMove === 'Bat'){
      score.win++;
    return('user won');
    
}
else if(computerMove === 'Ball'){
   score.lost++;
  return('computer win');
    
}
else if(computerMove=== 'Stamp'){
   score.tie++;
   return('its a tie');
    
}
   }

   
}


function showResult(userMove,computerMove,result){
   localStorage.setItem('score',JSON.stringify(score));
   console.log(score);

   document.querySelector('#user-move').innerText=
    userMove !==undefined ? `you have chosen a: ${userMove}`:'';
    document.querySelector('#computer-move').innerText=
    computerMove !==undefined ? `computer choice is:  ${computerMove}`:'';
    document.querySelector('#result').innerText= 
    result !== undefined ? result :'';
    document.querySelector('#score').innerText= score.displayScore();


}
