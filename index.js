const express = require('express')
const cors = require('cors')

const file = require('./dataj.json') 


const app = express()

app.use(cors())

app.get('/', function (req, res) {
    res.json(file)
})

// fetch('dataj.json')
// .then(response => response.json())
// .then(json => console.log(json))



app.listen(8000, () => {
    console.log('Server runing')
})