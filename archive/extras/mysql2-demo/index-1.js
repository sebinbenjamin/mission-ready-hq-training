const fs = require('fs');
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'SG-mhqteam1-3460-master.servers.mongodirector.com',
  user: 'mhqDemo',
  password: 'PRdk2HQA9dWAhEX!@#$%^',
  database: 'demo',
  port: 3306,
  ssl: { ca: fs.readFileSync('config/scalegrid-ca.pem') },
});

// Simple query - 2 parameter Query method
connection.query(
  'SELECT * FROM `countryLanguageMinimized` WHERE `Language` = "English"',
  (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log(results);
    }
  }
);

/**
 ** Query with the ? placeholder
 * 3 parameter Query method
 *     1. Query placeholder
 *     2. Array containing the values for the placeholder
 *     3. Function to handle the result and error if any
 * */
connection.query(
  'SELECT * FROM `countryLanguageMinimized` WHERE `Language` = ?',
  ['French'],
  (err, results) => {
    if (err) {
      console.error(err);
    } else {
      console.log(results);
    }
  }
);
