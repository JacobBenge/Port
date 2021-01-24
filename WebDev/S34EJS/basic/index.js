const express = require('express');
const app = express();
// functions for file and directory paths
const path = require('path');
// for reading objects out of json file
const redditData = require('./data.json')

// always serves the public directory to every request
// path.join allows ejs to run properly regardless of directory location
app.use(express.static(path.join(__dirname, 'public')))

// templating engine set to ejs
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    // default directory is views/*.ejs
    res.render('home')
})

app.get('/cats', (req,res) => {
    const cats = [
        'Blue','Rocket','Monty','Stephanie', 'Winston'
    ]
    res.render('cats',{cats})
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random()* 10) + 1
    // res.render('random', {rand: num}) // use rand as the variable name on .ejs file.
    res.render('random', {num}) // or just pass as is
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    // see the require ln 6
    const data = redditData[subreddit];
    // console.log(data)
    // spread so I don't have to do subreddit.name subreddit.description etc. in the subreddit.ejs file
    if (data){
        res.render('subreddit', {...data});
    } else {
        res.render('notfound', { subreddit })
    }
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})