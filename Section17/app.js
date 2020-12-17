//An array is a data structure with a typeof object. Can contain multiple data types.
let days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

console.log(days[1])
// can chain arrays. The code below returns monday and then takes the first letter of monday.
console.log(days[1][0])


// array methods
    // push adds to end of array
    // pop remove from end
    // shift remove from start
    // unshift add to start
let movieLine = ['tom', 'nancy']

console.log(movieLine[2]);
movieLine.push('oliver')
console.log(movieLine[2]);

console.log(movieLine[2]);
movieLine.pop()
console.log(movieLine[2]);

    //concat
    //indexOf
    //includes
    //reverse
    //slice works the same as in a string. Inclusive start. Non inclusive end
    //splice replaces existing elements in place
let cats = ['tigger', 'smudge']
let dogs = ['lilly', 'rusty']
let combo = cats.concat(dogs)
cats.includes('smudge') // returns true
dogs.includes('smudge') // returns false
combo.indexOf('tigger') // returns 0. If not in array it returns -1
combo.reverse() // destructively reverses the array.

// nested arrays
const tickTackToe = [['X','O','X'],['O',null,'X'],['O','O','X']]
gameBoard[1][1] // returns null