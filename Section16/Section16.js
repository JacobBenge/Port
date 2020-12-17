Math.random(); // returns a decimal between 0 and 1


// Comparison operators all return a boolean
	>
	<
	>=
	<=
	==
	!=
	=== // strict equality. Type must match

	!== // strict non-equality
	'a' < 'b' // true it compares the unicode values to determine the number
	''A > 'a' // false
// Weird type comparisions
	7 == '7'; //true
	0 == ''; //true
	true == false; //false
	0 == false; //true
	null == undefined; //true
// 
console.log("");
console.error("");
console.warn("");
alert("Annoying Pop-Up"); // pop up window shows.
let userInput = prompt("Please enter a number"); // prompt requests input and stores it into userInput

//Parsing methods to change typeof
let userInputAsInt = parseInt(userInput);
parseInt("101asasasa"); // 101

// Falsy values
false
0
""
null
undefined
NaN
// everything else is truthy