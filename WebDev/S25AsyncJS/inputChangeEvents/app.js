const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// change is triggered when the text is changed and the textbox is left (blur out of input box), but it is unaffected by arrow keys etc.
input.addEventListener('change', (e) => {
    console.log('change occured in the textbox')
});

// input is triggered upon any change to the textbox. Again, non letter changes don't trigger this.
input.addEventListener('input', (e) => {
    h1.innerText = input.value;
    console.log('INPUT EVENT!');
    console.log(e);
});
// <!DOCTYPE html>

// <head>
//     <title>Input Event</title>
//     <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
//     <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

// </head>

// <body>
//     <h1>Enter Your Username</h1>
//     <input type="text" id="username">
// </body>

// </html>
// const username = document.querySelector('input');
// const h1 = document.querySelector('h1');

// username.addEventListener('input', (e) => {
//    if(username.value === ''){
//     h1.innerText = 'Enter Your Username';   
//    } 
//    else {
//     h1.innerText = `Welcome, ${username.value}`;
//    }
// });