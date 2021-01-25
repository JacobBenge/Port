const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev')) // common

// my own middleware to mimic function of morgan package
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(), req.path, res.statusCode);
    next();
})

app.get('/', (req,res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE');
})

app.use((req, res) => {
    res.status(404).send('404 NOT FOUND!')
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})