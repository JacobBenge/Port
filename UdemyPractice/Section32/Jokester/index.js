//https://www.npmjs.com/package/give-me-a-joke
const jokes = require("give-me-a-joke");
//https://www.npmjs.com/package/colors
const colors = require("colors"); 

jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass