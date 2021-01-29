const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground');
const { campgroundSchema } = require('../schemas.js');

// CHECKS TO SEE IF FORM INPUT MEETS SCHEMA CRITERIA, OTHERWISE THROWS ERROR.
const validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if(error){
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

// ROUTES USER TO INDEX PAGE FOR CAMPGROUNDS. LOADS ALL CAMPGROUNDS FROM DB AND LISTS THEM.
router.get('/', catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
}))

// ROUTES USER TO NEW CAMPGROUND PAGE
router.get('/new', (req, res) => {
    res.render('campgrounds/new');
})

// ADDS A NEW CAMPGROUND TO DB
router.post('/', validateCampground, catchAsync(async (req, res) => {
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`)
}))

// ROUTES USER TO CAMPGROUND DETAILS PAGE
router.get('/:id', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate('reviews');
    res.render('campgrounds/show', { campground });
}))

// ROUTES USER TO CAMPGROUND EDIT PAGE
router.get('/:id/edit', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/edit', { campground });
}))

// APPLIES UPDATES TO THE CAMPGROUND INFO
router.put('/:id', validateCampground, catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground}, { new: true })
    res.redirect(`/campgrounds/${campground.id}`)
}))

// TRIGGERED BY DELETE BUTTON ON CAMPGROUND. DELETES THE CAMPGROUND
router.delete('/:id', catchAsync(async (req,res) => {
    const { id } = req.params;
    // ALSO TRIGGERS CASCADE DELETE OF RELATED REVIEWS. SEE campground.js line 20
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
}))

module.exports = router;