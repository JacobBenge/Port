const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const { v4:uuid } = require('uuid');

const port = 3000;
let comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: "Skyler",
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: "Sk8erBoi",
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: "onlysayswoof",
        comment: 'woof woof woof'
    }
]

// request parsing middleware for post requests
app.use(express.urlencoded({ extended: true}))
// for those that include json in the body
app.use(express.json())
// used to enable the form on edit.ejs to use HTTP verbs such as PUT or DELETE
app.use(methodOverride('_method'))
app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// index
app.get('/comments', (req,res) => {
    res.render('comments/index', { comments })
})

// new
app.get('/comments/new', (req,res) => {
    res.render('comments/new')
})

// create
app.post('/comments', (req,res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    // send the user back to /comments with a http 302 found
    res.redirect('/comments');
})

// show
app.get('/comments/:id', (req,res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })
})

// patch
app.patch('/comments/:id', (req,res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})

// edit
app.get('/comments/:id/edit', (req,res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment })
})

// delete
app.delete('/comments/:id', (req,res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

// app.get('/tacos', (req,res) => {
//     res.send("GET /tacos response")
// })

// app.post('/tacos', (req,res) => {
//    const {meat, qty} = req.body;
//     res.send(`Ok, your order has been placed for ${qty} ${meat} taco(s).`)
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})