const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');

app.use(morgan('dev')) // common

// my own middleware to mimic function of morgan package
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(), req.path, res.statusCode);
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if(password === 'chickennugget') {
        next();
    }
    throw new AppError('password required', 401);
}

app.get('/', (req,res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE');
})

app.get('/error', (req, res) => {
    chicken.fly()
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: I love chicken nuggets')
})

app.get('/admin', (req, res) =>{
    throw new AppError('You are not an admin', 403)
})

app.use((req, res) => {
    res.status(404).send('404 NOT FOUND!')
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went Wrong' } = err;
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})