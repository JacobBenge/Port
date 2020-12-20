// defining a function
// function funcName(){ 
// }


//numberOfSides is called a parameter in the function definition
function rollDie(numberOfSides){
    const dieResult = Math.floor(Math.random() * numberOfSides) + 1;
    console.log(dieResult);
}

const numSides = parseInt(prompt("Enter the number of sides on your dice"));
const numRolls = parseInt(prompt("Enter the number of rolls desired"));

for(let i = 0; i < numRolls; i++){
    // numSides is an argument, which is passed into the function in the place of the parameter
    rollDie(numSides);
}
