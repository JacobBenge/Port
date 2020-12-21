//forEach accepts a callback functino. Calls the function once per element in the array. 
//For Of is newer and better in most cases

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// function print(element){
//     console.log(element);
// }
numbers.forEach(function(el){
    console.log(el);
})

// for(let el of numbers){
//     console.log(el);
// }

////////////////////////////////////////////////////////////////////////
//Map
// Generates an array based on the results of the function
const doubles = numbers. map(function(num){
    return num * 2;
})

// accepts an array of names with extra spaces around the names and trims it
// stores in new array
function cleanNames(arr){
    return arr.map(function(str){
       return str.trim(); 
})
}
//////////////////////////////////////////////////////////////////////////
//Arrow Functions
// => is equivalent to function keyword. It's just placed after the arguments, instead of before.
const add = (x,y) => {
    return x+y;
}

// parentheses are optional on single parameter Arrow Functions
const square = x => {
    return x*x;
}

// Due implicit return values, you can leave out the return keyword in Arrow Functions
// note the lack of a semicolon and the use of parentheses instead of curly braces.
// const square = x => (
//     x*x
// )
const square = x => x*x // even shorter to remove parentheses and put on one line.

////////////////////////////////////////////////////////////////////////////////////
// setTimeout
console.log('Hello') // runs immediately

setTimeout(() => {
    console.log('Are you still there?')
}, 3000); // delayed by 3 secs in milliseconds

console.log('Goodbye') // runs immediately


// setInterval must be cleared to make it end
console.log('Hello') // runs immediately

const id = setInterval(() => {
    console.log('Are you still there?')
}, 3000); // Repeats every 3 secs in milliseconds

console.log('Goodbye') // runs immediately

// clearInterval(id); // stops the interval

/////////////////////////////////////////////////////////////////////////////////////////////
// Filter
// Used for creating a subset of an array non-destructively
numbers.filter(n => {
    return n < 10
})

const movies =[
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All the Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }

]
const goodMovies = movies.filter(m => m.score > 80)
const goodTitles = goodMovies.map(m => m.title)

// filter and map used in tangent
movies.filter(m => m.score > 80).map(m => m.title);

const badMovies = movies.filter(m => m.score < 80)
const recentMovies = movies.filter(m => m.year > 2000)

///////////////////////////////////////////////////////////
// Some and Every Methods
// Every returns true if all the elements in an array fits the requirement
const exams= [80,98,92,78,77,90,89,84,81,77]

exams.every(score => score >= 75) // returns true
exams.every(score => score >= 80) // returns false

// Some. If any element in the array fits the requirement
exams.every(score => score >= 80) // returns true

movies.some(movie => movie.year >2015) // returns true because at least one movie fits the requirement

// accepts an array and returns true if all are even numbers
const allEvens = arr => (arr.every(val => val % 2 === 0));

///////////////////////////////////////////////////////////
// Reduce
[3,5,7,9,11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

// sum of total as for loop
const prices = [9.99,1.50,19.99,49.99,30.50]
let total = 0;
for(let price of prices){
    total += price
}

// sum of total
const total = prices.reduce((total,price) => {
    return total + price
})

// using reduce to find the minimum value in the array
prices.reduce((min, price) => {
    if(price < min){
        return price;
    }
    return min;
})

movies.reduce((bestMovie, currMovie) => {
    if(currMovie.score > bestMovie.score){
        return currMovie;
    }
    return bestMovie;
})

// Can specify an initial value by using a second argument in reduce
const evens = [2,4,6,8]
evens.reduce((sum,num) => sum + num, 100) // without 100 it returns 20, with it it returns 120


////////////////////////////////////////////////////////
// arrow functions and this

// when the keyword this is used inside an arrow function, it refers to the scope it was created in.
// in this case it refers to the window object instead of the person object

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    // fullName: function(){
    //    return `${this.firstName} ${this.lastName}`
    // } 
    fullName: () => {
       return `${this.firstName} ${this.lastName}`
    } 
}