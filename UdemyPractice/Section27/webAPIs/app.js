console.log('sending request to server!');
setTimeout(()=>{
    console.log('here is your data from server...')
}, 3000)
console.log('I Am at the end of the file')
// javascript is single threaded. The browser will skip around to run lines of code while we wait for the timeout