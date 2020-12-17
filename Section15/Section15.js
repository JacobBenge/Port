// Javascript notes from Section 15

// The Math Object contains properties and methods for mathematical constants and functions. You can type Math and enter in the developer console to see a list of what is available.
	Math.PI // 3.14159265...
	Math.round(4.9) // 5
	// Absolute value:
	Math.abs(-456) // 456
	// Raises 2 to the 5th power:
	Math.pow(2,5) // 32
	// Removes decimal:
	Math.floor(3.999) // 3

// METHODS
		.toUpperCase()
		.toLowerCase()
		.trim() // removes excess spaces or tabs from string. Doesn't remove underscores
	// Method chaining. Can do multiple methods at once
		"  hello again!!    ".trim().toUpperCase() // returns "HELLO AGAIN!1"
	// Arguments variable.method(arg)
		let tvShow = 'catdog';		
		tvShow.searchFor('a') // 1
		tvShow.indexOf('cat'); // 0
		tvShow.indexOf('dog'); // 3
		tvShow.indexOf('z'); // -1 (not found)
		tvShow.slice(2,4); // "tdo" first argument is the begin index for the slice
		tvShow.replace('cat','hot'); // 'hotdog'
		tvShow.repeat(1); // 'catdogcatdog'

// Template literals must use back ticks `
	`I counted ${variable} sheep`;
// Null datatype is "intentional absence of any value" and must be assigned. Used for intitializing or reseting variables.
// Undefined is variable that does not have an assigned value or is 0/0.

// strings
	let animal = "octopus";
	let quote = 'she said "you had me at hello"';
// Strings are indexed
	animal[2] // returns t
// If the index is above the number of letters in the string there isn't an error. It just returns undefined
	animal[99] // returns undefined
// .length returns the count not the index of the last character. This is not a method, but rather a property
	animal.length // returns 7
// You can concatenate strings together with +

// Concatenating a string with a number will return a string.
	let result = 1 + "hi" // returns "1hi" with a typeof string

// methods
	//variable.method()
	let msg = "leave me alone"
	msg.toUpperCase() // returns "LEAVE ME ALONE" non destructive unless assigned to the variable again.
	