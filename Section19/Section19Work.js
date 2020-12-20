// Looping over arrays
const animals =[ 'lion', 'tiger', 'bear' ];

for(let i = 0; i < animals.length; i++){
	console.log(i, animals[i]);
}

// descending order
for(let i = animals.length -1; i >= 0; i--){
	console.log(i, animals[i]);
}

//nested loops
for (let i = 1; i <= 10; i++) {
	console.log(`i is: ${i}`)
	for(let j = 1; j < 4; j++){
		console.log(`	j is: ${j}`)
	}
}

// using nested for loop to access a nested array
const seatingChart = [
	['Kristen','Erik','Namita'],
	['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
	['Yuma','Sakura', 'Jack', 'Erika']
]
for (let i = 0; i < seatingChart.length; i++) {
	const row = seatingChart[i];
	console.log(`	ROW #${i + 1}`)
	for(let j = 0; j < row.length; j++){
		console.log(row[j])
	}
}

// While loops
let num = 0;
while (num < 10) {
	console.log(num);
	num++;
}

//While loop with parameters
const SECRET_NUM = "5"

let guess = prompt("Guess a number 1 thru 10");
while (guess !== SECRET_NUM) {
	guess = prompt("Wrong! Guess another number 1 thru 10");
}
console.log("CONGRATS")

// The break keyword

let targetNum = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while(true) {
	guess = Math.floor(Math.random() * 10);
	if(guess === targetNum) {
		console.log(`CORRECT! Guessed: ${guess} & target was: ${targetNum}`);
		break;
	}
	else{
	console.log(`Wrong! Guessed: ${guess}`);
	}
}

// Copycat prompter

let input = prompt("Type something")
while(true) {
	input = prompt(input);
	if (input.toLowerCase() === "something") break;
}
console.log("Smart ass!")

// For Of loop

const animals =[ 'Lion', 'Tiger', 'Bear' ];

for(let i = 0; i < animals.length; i++){
	console.log(`Old McDonald had a ${animals[i]} Ee i ee i o`)
}

for(let ani of animals){
	console.log(`Old McDonald had a ${ani} Ee i ee i o`)
}

// For of loop is better for managing the indexing of a nested array
const seatingChart = [
	['Kristen','Erik','Namita'],
	['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
	['Yuma','Sakura', 'Jack', 'Erika']
]

for(let row of seatingChart){
	for(let student of row){
		console.log(student);
	}
}

// can use a for of loop on a string in the argument
for (let char of "helloworld"){
	console.log(char)
}

// iterating over objects by using for in loop.
const testScores = {
	keenan: 80,
	damon: 67,
	kim: 89,
	shawn: 91
}

for(let person in testScores) {
	console.log(`${person} scored ${testScores[person]}`);
}

// you can access information from the object with the following commands
Object.keys(testScores)
Object.values(testScores)
Object.entries(testScores)

// test score average
let total =0;
let scores = Object.values(testScores);
for(let score of scores){
	total += score;
}
console.log(total/scores.length)

