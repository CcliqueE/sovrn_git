const express = require('express')
const app = express()
const pool = require('./db')
const cors = require('cors')
const { Query } = require('pg/lib')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//ROUTES//

arr = [1, 3, 4, 5, 7]

app.post('/', (req, res) => {
    
    arr.push(req.addNumber)
    
    res.json(arr)
})



app.listen(3000, () => {console.log('server has started on port 3000')})