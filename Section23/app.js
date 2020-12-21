///////////////////////////////////////////////////////////////
//Default Parameters
///////////////////////////////////////////////////////////////
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

// always have your default parameters come last
function greet(person, msg = 'Hey there'){
    console.log(`${msg}, ${person}`)
}

///////////////////////////////////////////////////////////////
// Spread ...
///////////////////////////////////////////////////////////////
const nums = [1,2,3,4,5,6,7,8,9,10]
Math.max(nums) // returns NaN
Math.max(...nums) // returns 10

console.log(nums) // prints [1,2,3,4,5,6,7,8,9,10] as an array
console.log(...nums) // prints 1 2 3 4 5 6 7 8 9 10

console.log(...'hello') // prints h e l l o

///////////////////////////////////////////////////////////////
// Spread with Array Literals
///////////////////////////////////////////////////////////////
const cats = ['Smudge','Baby Kitty', 'Drifter'];
const dogs = ['Rusty', 'Lilly'];

// copies data nondestructively
const allPets = [...cats, ...dogs, 'Speedy']

///////////////////////////////////////////////////////////////
// Spread with Objects
///////////////////////////////////////////////////////////////
// Copies properties from one object into another object literal
const feline = { legs:4, family: 'Felidae'};
const canine = { isFurry: true, family: 'Caninae'};

const newFelineObject = {...feline, color: 'black'};

// note the property conflict for family. The latter call wins the conflict. So catDog will be 'Caninae'
const catDog = {...feline, ...canine}

///////////////////////////////////////////////////////////////
// Rest Params. looks like spread but it's nothing alike
///////////////////////////////////////////////////////////////
// allows the user input multiple numbers into the nums parameter.
function sum(...nums){
    return nums.reduce((total, element) => total + element)
}

function raceResults(gold, silver, ...everyoneElse){
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}
///////////////////////////////////////////////////////////////
// Destructuring Arrays
///////////////////////////////////////////////////////////////
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934]

const [gold, silver, bronze, ...everyoneElse] = scores;

///////////////////////////////////////////////////////////////
// Destructuring Objects
///////////////////////////////////////////////////////////////
const user ={
    email:'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly',
    city: 'San Francisco',
    state: 'California'
}

const {firstName} = user; // equivalent to      const firstName = user.firstName;

const {born : birthYear, firstName, zipCode = 'Unknown'} = user; // renames born property to birthYear. Default value for city

///////////////////////////////////////////////////////////////
// Parameter Destructuring
///////////////////////////////////////////////////////////////
// note the use of curly braces inside the parameters to destructure before entering the function
 function fullName({firstName, lastName}){
     return `${firstName} ${lastName}`
 }


// movies.filter((movie) => movie.score >= 90)
 movies.filter(({score}) => score >= 90)

// wordy version
// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })
movies.map(({title, year, score}) => {
    return `${title} (${year}) is rated ${score}`
})