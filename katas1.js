function oneThroughTwenty() {
    
   let meuRetorno = [];

   for (let counter = 1; counter <= 20; counter++){
       meuRetorno.push(counter);
   }
    return meuRetorno;
}
console.log(oneThroughTwenty());

//call function oneThroughTwenty

function evensToTwenty() {
    
   let evenNumbers = [];

   for (let counter = 1; counter <= 20; counter++) {
     if (counter % 2 === 0){
       evenNumbers.push(counter);
     }
   }
   return evenNumbers;

}
console.log(evensToTwenty());

//call function evensToTwenty

function oddsToTwenty() {
    
    let oddNumbers = [];
    
    for(let counter = 1; counter <= 20; counter++) {
      if(counter % 2 === 1){
        oddNumbers.push(counter)
      }
    }
     return oddNumbers;

  }  
  console.log(oddsToTwenty());

//call function oddsToTwenty

function multiplesOfFive() {
    
  let multipleNumbers = [];

  for(let counter = 5; counter <= 100; counter++) {
    if(counter % 5 === 0){
       multipleNumbers.push(counter)
    }
  }
    return multipleNumbers;

}
console.log(multiplesOfFive());

//call function multiplesOfFive

function squareNumbers() {
    
  let square = [];
  
  for (let counter = 1; counter <= 100; counter++){
    let valor = counter * counter;
    if (valor === counter * counter){
       square.push(valor)
    }     
  }
    return square;
    
}
console.log(squareNumbers());

//call function squareNumbers

function countingBackwards() {
    
  let backwards = [];
  
  for (let counter = 20; counter <= 20; counter-1){
     backwards.push(counter)
  }
    return backwards;
}
console.log(countingBackwards());

//call function countingBackwards

function evenNumbersBackwards() {
    
  let evenBackwards = [];

  for (let counter = 20; counter >= 20; counter-1){
    if(counter % 2 === 0){
      evenBackwards.push(counter) 
    }
  }
    return evenBackwards
}
console.log(evenNumbersBackwards());

//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
  let oddBackwards = [];
  let counter = 20;
  
  while(counter >= 20){
    if(counter % 2 === 1){
      oddBackwards.push(counter)   
    }
    counter-1
  }  
    return oddBackwards
}
console.log(oddNumbersBackwards());

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
  let multFiveBackwards = [];
  let counter = 100

  while(counter >= 100){
    if(counter % 5 === 0){
      multFiveBackwards.push(counter);
    }
    counter-1
  }
    return multFiveBackwards
}
console.log(multiplesOfFiveBackwards())

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
  let squareBackwards = [];

  for (let counter = 100; counter >= 100; counter-1){
     let valor = counter * counter
      squareBackwards.push(valor);
   }
    return squareBackwards
}
console.log(squareNumbersBackwards());

//call function squareNumbersBackwards
