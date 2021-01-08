// AXIOS is built ontop of Fetch 
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Automatically parses JSON and is only resolved when everything is loaded
// axios.get('https://api.cryptonator.com/api/ticker/btc-usd') // returns a promise. 
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err =>{
//         console.log('error', err)
//     })


const bitcoinPrice = document.querySelector('#bitcoin');

// async version
const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        bitcoinPrice.innerText = `$${Math.floor(res.data.ticker.price)}`
    }catch(e){
        console.log('error', e)
    }
}

fetchBitcoinPrice();

const joke = document.querySelector('#joke');
const button = document.querySelector('#btnJoke');

const getDadJoke = async () => {
    try {
        // configures the header type. See the API docs for further options
        const config = { headers : {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        joke.innerText = `${res.data.joke}`;
    }catch(e){
        console.log('error', e)
    }
}

button.addEventListener('click', function() {
    getDadJoke();
});
