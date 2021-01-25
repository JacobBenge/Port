
const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');
const database = "yelp-camp";
const port = 27017;
const numCamps = 50;

mongoose.connect(`mongodb://localhost:${port}/${database}`, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .then(() => {
        console.log(`SUCCESSFULLY CONNECTED TO ${database} DATABASE ON MONGODB SERVER ON PORT: ${port}`)
    })
    .catch(err => {
        console.log(`ERROR IN CONNECTING TO ${database} DATABASE ON MONGODB SERVER ON PORT: ${port}`)
        console.log(err)
    })

const randArray = (array) => array[Math.floor(Math.random()* array.length)];

const seedDB = async () => {
    await Campground.deleteMany({})
    for(let i = 0; i < numCamps; i++){
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${randArray(descriptors)} ${randArray(places)}`
        })
        await camp.save();
    }
}

seedDB().then(() => {
    console.log(`You have successfully (re)seeded the ${database} database with ${numCamps} camps.`);
    mongoose.connection.close();
})