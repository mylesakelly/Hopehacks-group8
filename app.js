const mysql = require('mysql2');


// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'HopeHacks',
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// CREATE (INSERT) operation
const createQuery = "INSERT INTO `Login Info` (customer_login, cust_firstname, cust_lastname, password) VALUES ('C_Newsman', 'Charlie', 'Newsman', '100,245')";

connection.query(createQuery, (error, results, fields) => {
  if (error) {
    console.error('Error executing CREATE query:', error);
    // Handle the error appropriately
  } else {
    console.log('CREATE operation executed successfully.');
    // Process the results if needed
  }
});

// READ (SELECT) operation
const readQuery = "SELECT * FROM `Login Info`";

connection.query(readQuery, (error, results, fields) => {
  if (error) {
    console.error('Error executing READ query:', error);
    // Handle the error appropriately
  } else {
    console.log('READ operation executed successfully.');
    console.log('Query results:', results);
    // Process the results
  }
});

// UPDATE operation
const updateQuery = "UPDATE `Login Info` SET cust_firstname = 'Jane', cust_lastname = 'Smith' WHERE customer_login = 'C_Newsman'";

connection.query(updateQuery, (error, results, fields) => {
  if (error) {
    console.error('Error executing UPDATE query:', error);
    // Handle the error appropriately
  } else {
    console.log('UPDATE operation executed successfully.');
    // Process the results if needed
  }
});

// DELETE operation
const deleteQuery = "DELETE FROM `Login Info` WHERE customer_login = 'C_Newsman'";

connection.query(deleteQuery, (error, results, fields) => {
  if (error) {
    console.error('Error executing DELETE query:', error);
    // Handle the error appropriately
  } else {
    console.log('DELETE operation executed successfully.');
    // Process the results if needed
  }
});

// Close the connection
connection.end();
