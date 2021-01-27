const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MANAGES THE DATATYPES ALLOWED TO PASS THROUGH MONGOOSE AND INTO MONGODB. ANOTHER LEVEL ON TOP OF BROWSER FORM VALIDATION. THIS PREVENTS INVALID DATA FROM ENTERING DB WHEN USING POSTMAN.
const reviewSchema = new Schema({
    body: String,
    rating: Number
});

// EXPORTS THE REVIEW MODEL
module.exports = mongoose.model('Review', reviewSchema);