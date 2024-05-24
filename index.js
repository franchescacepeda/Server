const express = require('express')

const app = express()

const port = 300
app.use(express.static(path.join(public)))

app.get('/test', (req, res) => {
    res.send('Server is operational');
})

const root = (express.static(path.join(__dirname, '../client/dist')))
app.use(express.static(root))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root})
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})

