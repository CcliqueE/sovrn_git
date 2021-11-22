// const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const pool = require('./db')
const cors = require('cors')
const bcrypt = require('bcrypt')

// const execSync = require('child_process').execSync

// const output = execSync('heroku config api-inv-fou:get DATABASE_URL', { encoding: 'utf-8' })
// console.log(output)

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


//ROUTES//

app.post('/register', async (req, res) => {
	const query = await pool.query('SELECT email FROM users WHERE email = $1', [req.body.email])

    const exist = ((query.rows).map(({ email }) => email)).toString()
    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    const users = [req.body.email, req.body.username, hashedPassword]
    // console.log(req.body.username, hashedPassword)
    // console.log(process.env.DATABASE_URL)
    if (exist === req.body.email) {
        res.status(400).send(console.log('User with this email already exists'))
    } else {
        try {
        const createUser = await pool.query(
            'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *', users)
            res.json(createUser.rows[0])
        } catch(err) {
            res.status(500).send(err.message)
        }
    }
})

app.post('/login', async (req, res) => {
    const query = await pool.query('SELECT email FROM users WHERE email = $1', [req.body.email])
    const query_two = await pool.query('SELECT password FROM users WHERE email = $1', [req.body.email])
    const exist = ((query.rows).map(({ email }) => email)).toString()
    const compare = ((query_two.rows).map(({ password }) => password)).toString()

    const query_three = await pool.query('SELECT id FROM users WHERE email = $1', [req.body.email])
    const boo = ((query_three.rows).map(({ id }) => id)).toString()


    if (exist !== req.body.email) {
        return res.status(400).send('User does not exist with this email')
    } else {
        try {
            if (await bcrypt.compare(req.body.password, compare)) {
                // console.log('user_id: ' + boo)
                res.status(201).send(boo)
            } else {
                res.status(404).send("User with this password doesn't exist")
            }
        } catch(err) {
            res.status(500).send(err.message)
        }
    }
})

app.listen(3000, () => {console.log('server has started on port 3000')})