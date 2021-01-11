// REMEMBER TO RUN "npm install" in your terminal (in the same directory as this file)
// example command: node index.js 'Alle menslike wesens word vry'
// https://github.com/wooorm/franc
const franc = require("franc");
// https://github.com/adlawson/nodejs-langs
const langs = require("langs");
const colors = require("colors")

const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
    console.log("Try again with more sample text".red)
} else {
    const language = langs.where("3", langCode);
    console.log(`Detected Language: ${language.name}`.green)
}

