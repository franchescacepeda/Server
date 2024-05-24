const express = require('express')

const app = express()

const port = 300

app.get('/test', (req, res) => {
    res.send('Server is operational');
})