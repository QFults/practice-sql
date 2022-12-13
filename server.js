const express = require('express')
const mysql = require('mysql2')

const app = express()

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'users_db'
})

db.query('SELECT * FROM users', (err, users) => {
  if (err) throw err
  console.log(users)
})

const user = {
  username: 'johndoe',
  age: 21
}

// db.query('INSERT INTO users SET ?', user, (err) => {
//   if (err) throw err
//   console.log('User added!')
// })



app.listen(3001)
