const Pool = require('pg/lib').Pool

const pool = new Pool({
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: 'localhost',
    port: 5432,
    database: 'rustserverhosting'
})

module.exports = pool

// \l == list all database
// \c <database> == to pick a database
// \dt == list all tables in that database
// SELECT * FORM ... == Look at data in row
// DELETE FROM users WHERE email='bro@email.com' == Delete certain insert
// ALTER SEQUENCE users_id_seq RESTART WITH 1 == Restarts primary key sequence
// ALTER TABLE customers ADD COLUMN date DATE DEFAULT NOW();