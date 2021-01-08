// async function hello() {
//     // automatically returns a promise
// }

// the async function will return a resolved promise unless an error is thrown
const sing = async () => {
    // throw 'oh no, problem!'
    return 'LA LA LA LA'
}

sing()
    .then((data) => {
        console.log('Promise resolved with:', data);
    })
    .catch(err => {
        console.log('Oh NO promise rejected!');
        console.log(err);
    })