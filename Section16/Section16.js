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