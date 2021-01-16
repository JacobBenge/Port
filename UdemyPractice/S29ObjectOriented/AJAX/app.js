//AJAX
// Asynchronous Javascript and XML

//API
// Application progamming interface

//AJAJ
// Asynchronous Javascript and JSON
// Most API's return JSON 

//JSON
// JavaScript Object Notation
// Used to format and sent data in a consistent format
// https://api.cryptonator.com/api/ticker/btc-usd
const data =`{"ticker":{"base":"BTC","target":"USD","price":"39093.61426185","volume":"220164.96855477","change":"-233.32808436"},"timestamp":1610036522,"success":true,"error":""}`
// convert the string into a valid javaScript object
const parsedData = JSON.parse(data);
const price = parsedData.ticker.price

//converting into JSON
const dog = {breed:'lab',color: 'black', isAlive: true, owner: undefined}
// all instances of undefined are replaced with null and single quotes turns into double quotes
const JSONdog = JSON.stringify(dog);
// "{"breed":"lab","color":"black","isAlive":true}"

//postman

//query strings
// /search/shows?q=:query

//https://icanhazdadjoke.com/api
// must use header


// Fetch API
// Promise version
fetch('https://api.cryptonator.com/api/ticker/btc-usd') // returns a promise
    .then(res => {
        console.log('response, waiting to parse', res);
        return res.json()
    })
    .then(data => {
        console.log('data parsed', data);
        console.log(data.ticker.price);
    })
    .catch(e => {
        console.log('oh no error', e);
    })

// async version
const fetchBitcoinPrice = async () => {
    try{
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json()
        console.log(data.ticker.price)
    } catch(e){
        console.log('something went wrong', e)
    }
}

// AXIOS is built ontop of Fetch 
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>