const mongoose = require('mongoose');
const database = "relationshipDemo";
const port = 27017;

mongoose.connect(`mongodb://localhost:${port}/${database}`, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .then(() => {
        console.log(`SUCCESSFULLY CONNECTED TO ${database} DATABASE ON MONGODB SERVER ON PORT: ${port}`)
    })
    .catch(err => {
        console.log(`ERROR IN CONNECTING TO ${database} DATABASE ON MONGODB SERVER ON PORT: ${port}`)
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new mongoose.Schema({
    name: String,
    price: Number,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})

const Product  = mongoose.model('Product', productSchema);
const Farm  = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     {name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//     {name: 'Sugar Baby Watermelon', price: 4.99, season: 'Summer' },
//     {name: 'Asparagus', price: 3.99, season: 'Spring' },
// ])

const makeFarm = async () => {
    const farm = new  Farm({ name: 'Full Belly Farms', city: 'Guinda, CA' });
    const melon =  await Product.findOne({ name: 'Goddess Melon' });
    farm.products.push(melon)
    await farm.save()
    console.log(farm)
}
makeFarm();
