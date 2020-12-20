// Scope - variable visibility
// When a variable is defined inside a function,it can only be accessed within that function.
// You may update a variable inside a function and that new value will reflect after the function is called.
let variable = 0;
function func(){
  variable = 6;
}
console.log(variable);
func();
console.log(variable);

// Example showing how scope affects which variable declaration is used. Conflicting definitions
const bird = 'Scarlet Macaw';
function birdWatch(){
  const bird = 'Great Blue Heron'
  console.log(bird); // prints 'Great Blue Heron'
}
birdWatch(); // runs the function
console.log(bird); // prints 'Scarlet Macaw'

// Block scope applies to conditionals, too. Any block
let radius =8;
if(radius > 0){
  const PI = 3.14159;
  let msg ='HIII!'
}
console.log(radius); // prints 8
console.log(msg); // prints msg is not defined because it is not in scope

// Deprecated var keyword is not affected by scope
for(var i = 0; i < 5; i++){
  var msg = 'var is deprecated'
}
console.log(i) // prints 5
console.log(msg) // prints msg

// Lexical Scope: multi-layered function practice. Can access a variable from parent function, but not child function.
function bankRobbery(){
  const heroes =['Spiderman', 'Wolverine', 'Black Panther', 'Batman'];
  function cryForHelp(){
    function inner(){
      for(let hero of heroes){
        console.log(`Please help us, ${hero}`); // can access hero because it is defined in the parent function
      }
    }
    inner();
  }
  cryForHelp(); // have to call the function after it is defined.
}
bankRobbery();

// Function Expressions:
// nameless function that is called with add(1,2)
const add = function (x,y){
  return x + y;
}

// Higher Order Functions: Passing a function as an argument
function callTwice(func){
  func();
  func();
}

function rollDie(){
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll)
}

callTwice(rollDie);

// Factory function: returning functions. Must capture in let or const.
function makeBetweenFunc(min, max){
  return function(num) {
    return num >= min && num<= max;
  }
}
const testRange = makeBetweenFunc(1,10);
testRange(5); // returns true

//Differences and similarities between functions and methods
// A method is a function that can be executed as such "hello".toUpperCase();
// Every method is a function but not every function is a method.
const myMath = {
  PI: 3.14159,
  // square: function(num){return num*num;},
  square(num){return num*num;}, // equivalent shorthand for defining a method
  // cube: function(num){return num**3;}
  cube(num){return num**3;}
}
myMath.square(2); // returns 4
myMath.cube(2); // returns 8

/////////////////////////////////////////////////////////////////////
// THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
///////////////////////////////////////////////////////////////////
// refers to the object itself. Helpful for accessing properties of an object
// Value of this changes according to invocation context
const person = {
  first: 'Robert',
  last: 'Herjavec',
  fullName() {
    console.log("THIS IS REFERRING TO:", this)
    return `${this.first} ${this.last}`
  }
}
person.fullName(); // "Robert Herjavec"
person.last = "Plant";
person.fullName(); // "Robert Plant"

const person2 = person.fullName;
person2(); // window object is referred to by this in this context. 
            // the same as window.person2()
// whatever comes to the left of the period is what "this" refers to for context

const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg(){
      this.eggCount++;
      return 'EGG';
  }
}

// Try Catch. Used for exception handling and breaking when there is critical error.
// Helpful for async functions. Allows code that follows to run even if there is an error.
try {
  nonexistentObject.toUpperCase();
} catch{
  console.log('ERROR. Exception caught')
}
// nonexistentObject.toUpperCase(); // this line would break the code and the next line wouldn't run
console.log('Despite the error, this code still ran')

//For try catch, you have access to the error log in "e"
function yell(msg){
  try{
    console.log(msg.toUpperCase().repeat(3))
  }catch(e){
    console.log(e);
    console.log("Please pass in a string")
  }
}
yell('Ouch'); // runs smoothly
yell(1212124); // caught exception