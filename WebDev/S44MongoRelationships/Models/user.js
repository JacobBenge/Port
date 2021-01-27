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

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: {id: false},
            addressLine1: {
                type: String,
                required: true
            }, 
            addressLine2: {
                type: String,
                default: null
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            zipCode: {
                type: Number,
                minlength: 8,
                maxlength: 8
            },
            country: {
                type: String,
                required: true
            }
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Big',
        last: 'Bird',
    })
    u.addresses.push({
        addressLine1: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        zipCode: '99999',
        country: 'USA'
    })
    const result =  await u.save()
    console.log(result)
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            addressLine1: '99 ABC St.',
            city: 'New York',
            state: 'NY',
            zipCode: '99999',
            country: 'USA' 
        }
    )
    const result = await user.save()
    console.log(result)
}

makeUser();
addAddress('601038be7562436bdc022973');