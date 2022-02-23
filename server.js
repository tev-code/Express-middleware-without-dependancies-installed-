const express = require('express')
const { nextTick } = require('process')
const app = express()

app.use(logger)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/users', (req, res) => {
    console.log('Users Page')
    res.send('Users Page')
})

function logger(req, res, next) {
    next()
    console.log('after')
}

function auth(req, res, next) {
    if (req.query.admin === 'true'){
        req.admin = true
        next()
        return
    }
    res.send('No auth')
}

app.listten(3000)