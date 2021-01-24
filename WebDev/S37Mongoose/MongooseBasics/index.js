const mongoose = require('mongoose');
const database = "movieApp";
const port = 27017;

mongoose.connect(`mongodb://localhost:${port}/${database}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log(`SUCCESSFULLY CONNECTED TO ${database} DATABASE ON MONGODB SERVER`)
    })
    .catch(err => {
        console.log(`ERROR IN CONNECTING TO ${database} DATABASE ON MONGODB SERVER`)
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema); // mongoose will pluralize this and lowercase it
// SINGULAR INSERT
// const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'});
// amadeus.save()

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log("INSERT SUCESSFUL!");
//         console.log(data);
//     })
// AUTOMATICALLY SAVES

// in node REPL
// Movie.find({year: {$lte: 1990}}).then(data => console.log(data))
// Movie.findByID('600cd0955f6ca637142d9401').then(data => console.log(data))

// IN MONGODB
// use movieApp
// db.movies.find()
// Movie.updateOne({ title: 'Amadeus'}, {year: 1984}).then(data => console.log(data))
// Movie.updateMany({title: {$in: ['Amadeus', 'Stand By Me']}}, {score: 10}).then(data => console.log(data))
// Movie.findOneAndUpdate({ title 'The Iron Giant'}, {score: 7.0}, {new: true}).then(data => console.log(data))
// Movie.remove({title: 'Amelie'}).then(data => console.log(data))
// Movie.findOneAndDelete({title: 'Amelie'}).then(data => console.log(data)) // returns the deleted object
// Movie.deleteMany({year: {$gte:1999}}).then(data => console.log(data))
