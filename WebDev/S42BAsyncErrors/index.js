const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const AppError = require('./AppError');

const Product = require('./models/product');

const categories = ['fruit', 'vegetable', 'dairy']

const mongoose = require('mongoose');
const database = "farmStand2";
const port = 27017;

mongoose.connect(`mongodb://localhost:${port}/${database}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log(`SUCCESSFULLY CONNECTED TO ${database} DATABASE ON MONGODB SERVER ON PORT: ${port}`)
    })
    .catch(err => {
        console.log(`ERROR IN CONNECTING TO ${database} DATABASE ON MONGODB SERVER ON PORT: ${port}`)
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// ALTERNATIVE TO WRAPPING ASYNC FUNCTIONS IN TRY CATCH
// function wrapAsync(fn) {
//     return function (req, res, next) {
//         fn(req, res, next).catch(e => next(e))
//     }
// }
// app.get('/products', wrapAsync(async (req, res, next) => {
//     const { category } = req.query;
//     if(category){
//         const products = await Product.find({category: category})
//         res.render('products/index', { products, category })
//     } else {
//         const products = await Product.find({})
//         res.render('products/index', { products, category: 'All' })
//     }
// }))

app.get('/products', async (req, res, next) => {
    try {
        const { category } = req.query;
        if(category){
            const products = await Product.find({category: category})
            res.render('products/index', { products, category })
        } else {
            const products = await Product.find({})
            res.render('products/index', { products, category: 'All' })
        }
    } catch(e) {
        next(e);
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new', {categories})
})

app.post('/products', async (req, res, next) => {
    try {
        const newProduct = await new Product(req.body)
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`)
    } catch (e) {
        next(e);
    }
})

app.get('/products/:id', async (req, res, next) => {
    try{
        const { id } = req.params;
        const foundProduct = await Product.findById(id)
        if(!foundProduct) {
            throw new AppError('Product Not Found', 404);
        }
        res.render('products/details', {foundProduct})
    } catch(e) {
        next(e);
    }
})

app.get('/products/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params;
        const editProduct = await Product.findById(id);
        if(!editProduct) {
            return next( new AppError("The product you are trying to edit doesn't exist", 404));
        }
        res.render('products/edit', {editProduct , categories})
    } catch(e) {
        next(e);
    }
})

app.put('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
        res.redirect(`/products/${product._id}`);
    } catch(e) {
        next(e);
    }
})

app.delete('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        console.log(`PERMANENTLY DELETED PRODUCT ${deletedProduct}`)
        res.redirect('/products')
    } catch(e) {
        next(e);
    }
})

const handleValidationErr = (err) => {
    console.dir(err);
    return new AppError(`Validation Falied... ${err.message}`, 400);
}

app.use((err, req, res, next) => {
    // const { status = 500, message = 'Something went wrong'} = err;
    // res.status(status).send(message);
    if(err.name === 'ValidationError') err = handleValidationErr(err)
    next(err);
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON http://localhost:3000")
})