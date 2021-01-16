const franc = require("franc");
const langs = require("langs");
const colors = require("colors")

const input = process.argv[2];
const langCode = franc(input);
const language = langs.where("3", langCode);

if (langCode === 'und') {
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!".red)
} else if(language !== undefined){
    console.log(`Our best guess is: ${language.name}`.green)
} else{
    console.log(`Oops, an error occurred and the franc node package returned ${language}.`.yellow);
    console.log("This happens with short English strings and swear words.".yellow)
}
