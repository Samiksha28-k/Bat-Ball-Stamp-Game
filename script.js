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


function getResult(userMove,computerMove){
   if(userMove==='Bat'){
    if (computerMove === 'Bat'){
    return('its a tie');
}
else if(computerMove=== 'Ball'){
  return('user won');
    
}
else if(computerMove=== 'Stamp'){
   return('computer has won');
    
}
  
// for ball
}else if(userMove==='Ball'){
        if (computerMove === 'Bat'){
    return('computer has won');
    
}
else if(computerMove === 'Ball'){
  return('its a tie');
    
}
else if(computerMove=== 'Stamp'){
   return('user won');
    
}
   }
   else{
    if (computerMove === 'Bat'){
    return('user won');
    
}
else if(computerMove === 'Ball'){
  return('computer win');
    
}
else if(computerMove=== 'Stamp'){
   return('its a tie');
    
}
   }

   
}
function showResult(userMove,computerMove,result){
alert(`you have chosen a ${userMove}, computer choise is ${computerMove},${result}`)

}
