const mongoose = require('mongoose');
const Review = require('./review');
const Schema = mongoose.Schema;

// MANAGES THE DATATYPES ALLOWED TO PASS THROUGH MONGOOSE AND INTO MONGODB. ANOTHER LEVEL ON TOP OF BROWSER FORM VALIDATION. THIS PREVENTS INVALID DATA FROM ENTERING DB WHEN USING POSTMAN. 
const campgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

// CASCADE DELETES THE REVIEWS WHEN A CAMPGROUND IS DELETED. THIS IS QUERY MIDDLEWARE, NOT DOCUMENT MIDDLEWARE
campgroundSchema.post('findOneAndDelete', async function (doc) {
    if(doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

// EXPORTS THE CAMPGROUND MODEL
module.exports = mongoose.model('Campground', campgroundSchema);