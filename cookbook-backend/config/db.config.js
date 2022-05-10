require('dotenv').config()

const user = process.env.DBUSER
const host = process.env.DBHOST
const database = process.env.DATABASE 
const password = process.env.DBPASSWORD
const port = process.env.DBPORT

module.exports = {
    user,
    host,
    database,
    password,
    port
}
