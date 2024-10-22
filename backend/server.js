const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

/*const db = mysql.createConnection({
  host: "sql5.freesqldatabase.com",
  user: "sql5736909",
  password: "mEdx8aXMbk",
  database: "sql5736909",
  port: "3306"
})*/

const con = mysql.createConnection(`mysql://root:BWbBZXkveHaGvmOBVXjMLzMzIWZdFfDg@mysql.railway.internal:3306/railway`)

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
  
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if(err) return res.json("Login Failed");
    if(data.length > 0) {
      return res.json("Login Successfully");
    }
    else {
      return res.json("No Record");
    }
  })
})

app.listen(8081, () => {
  console.log('listening...')
})