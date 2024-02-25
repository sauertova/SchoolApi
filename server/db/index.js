const pg = require('pg')
const fs = require('fs')
require('dotenv').config()

const pool = new pg.Pool({
    user: process.env.PG_USERNAME,
    host: 'localhost',
    database: 'school',
    password: process.env.PG_PASSWORD,
    port: 5432
})