
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/static')));


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'HopeHacks1',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:' + err.stack);
    return;
  }
  console.log('Connected to database');
});



// Parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



app.get('/index.html', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(path.join(__dirname, '/static/style.css')));


app.get('/index.html', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'index.html'));
  });

app.get('/reset.html', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'reset.html'));
});

app.post('/reset-password', (req, res) => {
  const { password } = req.body;

        const updateQuery = 'UPDATE ResetPassword SET password = ? WHERE password = password';
  connection.query(updateQuery, [password], (error, results) => {
    if (error) {
      console.error('Error executing the query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Password updated successfully' + results);
    }
      });
    })

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
