const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const mongooseOptions = {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
};

const campgrounds = require('./routes/campgrounds');
const reviews = require('./routes/reviews');

const database = "yelp-camp";
const localHostPort = 3000;
const dbPort = 27017;

// SETS UP CONNECTION TO MONGODB
mongoose.connect(`mongodb://localhost:${dbPort}/${database}`, mongooseOptions)
    .then(() => {
        console.log(`SUCCESSFULLY CONNECTED TO ${database} DATABASE ON MONGODB SERVER ON PORT: ${dbPort}`)
    })
    .catch(err => {
        console.log(`ERROR IN CONNECTING TO ${database} DATABASE ON MONGODB SERVER ON PORT: ${dbPort}`)
        console.log(err)
    })

// ENABLES EJS FOR PAGE TEMPLATING AND EMBEDDING JAVASCRIPT
app.set('view engine', 'ejs')
// ENABLES USE OF <% layout('boilerplate') -%> ON .ejs FILES. BETTER TEMPLATING THAN <% include ../footer %>
app.engine('ejs', ejsMate);
// SETS DEFAULT VIEWS PATH FOR EXPRESS
app.set('views', path.join(__dirname, 'views'))

// ENABLES USE OF POST AND PUT HTTP REQUESTS
app.use(express.urlencoded({ extended: true }))
// ENABLES FORMS TO TRIGGER DELETE HTTP REQUESTS WITH ADDING QUERY STRING TO URL ?_method=DELETE.
app.use(methodOverride('_method'));
// SERVES ALL FILES IN THE PUBLIC DIRECTORY
app.use(express.static(path.join(__dirname, 'public')));

// ANY URLS WITH /campgrounds WILL BE ROUTED TO ./routes/campgrounds.js
app.use('/campgrounds', campgrounds)
// IF :ID AND REVIEW ADDED ON IT WILL ROUTE TO REVIEWS
app.use('/campgrounds/:id/reviews', reviews)

// DEFAULT INDEX PAGE. UNFINISHED. GO TO HTTP://localhost:3000/campgrounds/
app.get('/', (req, res) => {
    res.render('home')
})

// DEFAULT ERROR PAGE WILL TRIGGER IF NO OTHER ROUTES HIT
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

// PASSES STATUS CODE AND ERROR MESSAGE TO DEFAULT ERROR PAGE (./partials/errorPage.ejs)
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong'
    res.status(statusCode).render('errorPage', { err })
})

// EXPRESS BEGINS LISTENING ON SPECIFIED PORT
app.listen(localHostPort, ()=> {
    console.log(`APP IS LISTENING ON http://localhost:${localHostPort}`)
})