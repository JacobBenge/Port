const express = require('express');
const app = express();
const port = 3000
// console.dir(app)

// shows in REPL
// req and res are generated from HTTP by express. Express converts the HTTP to JSON
// app.use((req, res) => {
//     console.log('WE GOT A NEW REQUEST!!')
//     // res.send({color: 'red'}) // express automatically updates the content type in the header
//     res.send('<h1>This is my WebPage. Hello World!</h1>')
//     // console.dir(req)
// })

// root
app.get('/', (req, res) => {
    res.send('Welcome to the homepage')
})

// : represents a variable. Use this for generic patterns
// http://localhost:3000/r/programmerHumor/25413
app.get('/r/:subreddit/:postID', (req, res) => {
    const {subreddit, postID} = req.params;
    res.send(`<h1>Viewing Post ID: ${postID} on the ${subreddit} subreddit</h1>`)
})

app.get('/cats', (req, res) => {
    res.send('Meow!!')
})

app.post('/cats', (req, res) => {
    res.send('You sent a POST request to /cats')
})

// http://localhost:3000/search?color=red
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Nothing found if nothing searched')
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
    console.log(req.query)
})

// for all else. Must come last
app.get('*', (req, res) => {
    res.send(`I don't know that path`)
})

// starts listening on port defined above
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})