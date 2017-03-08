
const express = require('express')
const bodyParser = require('body-parser')
var currentId = 3
var theArticles = { articles : [ { id: 1, author: 'Scott', text:'A post' }, { id: 2, author: 'Scotty', text:'A posty' },
            { id: 3, author: 'Scottie', text:'A postie' }]}

const addArticle = (req, res) => {
     theArticles.articles.push({id: currentId+1, author: req.body.author, text: req.body.text});
     currentId++;
     res.send({id: currentId, author:req.body.author, text: req.body.text});
}

const hello = (req, res) => res.send({ hello: 'world' })

const getArticles = (req, res) => {
    res.send(theArticles)
}

const app = express()
app.use(bodyParser.json())
app.post('/article', addArticle)
app.get('/', hello)
app.get('/articles', getArticles)

// Get the port from the environment, i.e., Heroku sets it
const port = process.env.PORT || 3000
const server = app.listen(port, () => {
     const addr = server.address()
     console.log(`Server listening at http://${addr.address}:${addr.port}`)
})
