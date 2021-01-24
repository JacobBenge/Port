const mongoose = require('mongoose');
const database = "shopApp";
const port = 27017;

mongoose.connect(`mongodb://localhost:${port}/${database}`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log(`SUCCESSFULLY CONNECTED TO ${database} DATABASE ON MONGODB SERVER`)
    })
    .catch(err => {
        console.log(`ERROR IN CONNECTING TO ${database} DATABASE ON MONGODB SERVER`)
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        // Custom error message
        min: [0, 'Price must be positive']
    },
    onSale: {
        type: Boolean,
        required: false,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        // string must be in this array
        enum: ['S', 'M', 'L']
    }
});

// don't use arrow function here due to the value of THIS changing
productSchema.methods.greet = function() {
    console.log(this.name)
}

const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Bike Helmet'})
    foundProduct.greet();
}
findProduct();

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Mountain Bike', price: 599, categories: ['Cycling']})
bike.save()
    .then(data => {
        console.log("IT WORKED!")
        console.log(data)
    })
    .catch(err => {
        console.log("OH NO ERROR!")
        console.log(err)
        //console.log(err.errors.name.properties.message)
    })

// WHEN UPDATING YOU MUST SET THE OPTION OF runValidators to TRUE otherwise you can end up with bad data
Product.findOneAndUpdate({name: 'Mountain Bike'}, {price: -9}, {new: true, runValidators: true})
    .then(data => {
        console.log(data)
    })