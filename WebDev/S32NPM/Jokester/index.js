//https://www.npmjs.com/package/give-me-a-joke
const jokes = require("give-me-a-joke");
//https://www.npmjs.com/package/colors
const colors = require("colors"); 

jokes.getRandomDadJoke(function (joke) {
    console.log(' ')
    console.log('Dad Joke:'.green);
    console.log(joke);
});

// To get a random Chuck Norris joke
jokes.getRandomCNJoke (function(joke) {
    console.log(' ');
    console.log('Chuck Norris Joke:'.inverse);
    console.log(joke);
});
 
// To get a customized joke
var fn = "Jacob";
var ln = "Benge";
jokes.getCustomJoke (fn, ln, function(joke) {
    console.log(' ');
    console.log('Customized Programmer Joke:'.underline.red);
    console.log(joke);
});
 
// To get a random Joke of the Day (Categories allowed: "blonde", "knock-knock", "animal", "jod")
var category = "jod";
jokes.getRandomJokeOfTheDay (category, function(joke) {
    console.log(' ');
    console.log('Joke of the Day:'.rainbow);
    console.log(joke);
});