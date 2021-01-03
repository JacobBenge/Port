document.querySelector('button').addEventListener('click', (evt) =>{
    console.log(evt)
})

// const input = document.querySelector('input');
// input.addEventListener('keydown', (evt) => {
//     console.log(evt)
//     console.log(evt.key)
//     console.log(evt.code) // includes the location of the key that was pressed
// })

// input.addEventListener('keyup', () => {
//     console.log('a key was let go')
// })

// global. you dont have to be within the text box.
window.addEventListener('keydown', (e) =>{
    switch(e.code){
        case 'ArrowUp':
            console.log('UP!');
            break;
        case 'ArrowDown':
            console.log('DOWN!');
            break;
        case 'ArrowLeft':
            console.log('LEFT!');
            break;
        case 'ArrowRight':
            console.log('RIGHT!');
            break;
        default:
            console.log('IGNORED!');
    }
})