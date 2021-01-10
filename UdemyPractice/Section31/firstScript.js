for(let i= 0; i< 10; i++){
    console.log('hello from first script');
}

const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`These are arguments that are passed in from the command line following 'node firstScript.js : ${arg}`)
}