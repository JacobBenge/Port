let maximum = parseInt(prompt("Enter the maximum number!"));

// note that if 0 is selected as the maximum, the while loop will be infinite due to falsy values.
while(!maximum) {
	maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
let attempts = 1;
console.log(targetNum);

let guess = prompt("Enter your first guess");
while(parseInt(guess) !== targetNum) {
	if (guess === 'quit') break;
	attempts++;
	if(guess > targetNum){
	guess = prompt("Too high! Enter a new guess: or type 'quit'");
	} else {
	guess = prompt("Too low! Enter a new guess: or type 'quit'");
	}
}

if(guess ==='quit'){
	console.log("Ok, you quit");
} else {
	console.log(`You guessed it! It took you ${attempts} guesses`)
}
