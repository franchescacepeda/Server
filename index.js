const express = require('express')

const app = express()

const port = 300
app.use(express.static(path.join(public)))

app.get('/test', (req, res) => {
    res.send('Server is operational');
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})

