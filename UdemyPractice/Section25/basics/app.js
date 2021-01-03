///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Section 25: The Missing Piece: DOM Events
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////
//On Click Property
///////////////////////////////////////////
// SMALL LIST OF EVENTS: clicks, drags, drops, hovers, scrolls, form submission, key presses, focus/blur, mouse wheel, 
// double click, copying, pasting, audio start, screen resize, printing, etc.

// onclick
const btn = document.querySelector('#v2');

btn.onclick = function(){
    console.log('You clicked me!')
    console.log('I hope it worked')
}

// onmouseenter often used to change css classes to help user see mouse over
function mooseEnter(){
    console.log('The moose has entered');
}

btn.onmouseenter = mooseEnter;

console.dir(btn);

// document.querySelector('h1').onclick = function(){
//     alert('You clicked the h1')
// }

document.querySelector('h1').onclick = () => {
    alert('You clicked the h1')
}

///////////////////////////////////////////
//addEventListener
// https://developer.mozilla.org/en-US/docs/Web/Events
///////////////////////////////////////////
const btn3 = document.querySelector('#v3');

btn3.addEventListener('dblclick', function (){
    alert('Double Clicked');
})

// reason to use addEventListener is so that you can use two call back function
function twist() {
    console.log('twist');
}

function shout() {
    console.log('shout');
}

const tasButton = document.querySelector('#tas');
// tasButton.onclick = twist;
// tasButton.onclick = shout;

// once makes it so the event listener is removed after running once
tasButton.addEventListener('click', twist, {once: true})
tasButton.addEventListener('click', shout)