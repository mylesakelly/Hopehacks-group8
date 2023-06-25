const fs = require('fs');
const express = require("express");
const app = express();
const axios = require('axios');
const https = require('https');
const path = require('path');
const bodyParser = require('body-parser');
const port = 5000;

app.use(express.json());

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'nodelogin'
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
  } else {
    console.log('Connected to the database!');
  }
});

// Login an existing user in the Database and Register (working on combining the two functionality in one post request to server)

app.post('/users', (req, res) => {

  const { username, password, email, firstname, lastname } = req.body;

  // Query database to check if user exists!

  const selectQuery = 'SELECT * FROM accounts WHERE username = ? AND password = ?';
  connection.query(selectQuery, [username, password], (error, results) => {
    if (error) {
      console.error('Error executing the query:', error);
      res.status(500).send('Internal Server Error');
    } else if (results.length === 0) {
      res.status(401).send("login succesful");
    } else {

// Register a new user! YAY!

    const insertQuery = 'INSERT INTO accounts (username, password, email, first_name, last_name) VALUES (?,?,?,?,?)';
    connection.query(insertQuery, [username, password, email, firstname, lastname ], (insertError, insertResults) => {
      if (insertError) {
        console.log("error inserting user:", insertError);
        res.status(500).send('Internal Server Error with Inserting User');

      } else {
        res.status(200).send(insertResults);
      }
    })
  }

  });
});

// READ all users from mySQL Database

app.get('/users', (req, res) => {
  const query = 'SELECT * FROM accounts';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing the query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
});

// delete user account from the database

app.get('/users/2', (req, res) => {
  const query = 'SELECT * FROM accounts WHERE id = 2';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing the query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(results);
    }
  });
});

app.delete('/users/2', (req, res) => {
  const userId = req.params.id;
  const query = 'DELETE FROM accounts WHERE id = 2';

  connection.query(query, [userId], (error, results) => {
    if (error) {
      console.error('Error executing the query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('User deleted successfully');
    }
  });
});











// Serve static files
app.use(express.static('public'));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

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


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/add.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'add.js'));
  });

  app.post('/', async (req, res) => {
    const number = req.body.number; //original code req.query.number
  
    const options = {
      method: 'GET',
      url: `https://numbersapi.p.rapidapi.com/${number}/trivia`,
      params: {
        fragment: 'true',
        notfound: 'floor',
        json: 'true'
      },
      headers: {
        'X-RapidAPI-Key': '232b08ccbemsh2d35d2be8f36a45p1b7df0jsn53bbb59fd7e2',
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      const trivia = response.data.text;
  
      res.status(200).json({ trivia });

    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving data from the API.');
    }
  });


  app.get('/login', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/login.html');
});


  app.listen(port, () => {
    console.log(`App is running on port ${port}...`);
  });
  


// functionality for login page



// click delete button to delete from mysql database
// the server must redirect to a new page saying record deleted
// then go back to the login screen
















app.get('/admin', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/admin.html');
});

