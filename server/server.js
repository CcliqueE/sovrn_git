const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const pool = require('./db')
const cors = require('cors')
const { Query } = require('pg/lib')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//ROUTES//

app.post('/', (req, res) => {
    
    const a = req.body.number_one
    const b = req.body.number_two
    
    res.json(a * b)

})



app.listen(PORT, () => {console.log('server has started on port 3000')})