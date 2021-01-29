const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../utils/catchAsync');
const Campground = require('../models/campground');
const Review = require('../models/review');
const ExpressError = require('../utils/ExpressError');
const { reviewSchema } = require('../schemas.js');

// CHECKS TO SEE IF FORM INPUT MEETS SCHEMA CRITERIA, OTHERWISE THROWS ERROR.
const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

// SAVES THE REVIEW IN THE REVIEWS COLLECTION AND ADDS THE REVIEWID TO THE CAMPGROUND OBJECT FOR REFERENCE
router.post('/', validateReview, catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}))

// TRIGGERED BY DELETE BUTTON ON REVIEW. DELETES THE REVIEW ITSELF AND THE REVIEWID ON THE CAMPGROUND OBJECT.
router.delete('/:reviewId', catchAsync(async (req, res) => {
    const { id, reviewId} = req.params;
    await Campground.findByIdAndUpdate(id, {$pull: { reviews: reviewId}  });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/campgrounds/${id}`);
}))

module.exports = router;