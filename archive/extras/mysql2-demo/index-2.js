const fs = require('fs');
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'SG-mhqteam1-3460-master.servers.mongodirector.com',
  user: 'mhqDemo',
  password: 'PRdk2HQA9dWAhEX!@#$%^',
  database: 'demo',
  port: 3306,
  ssl: { ca: fs.readFileSync('config/scalegrid-ca.pem') },
});

// Runs the query
connection.query(
  'SELECT * FROM `countryLanguageMinimized` WHERE `Language` = ?',
  ['English'],
  (err, results) => {
    if (err) {
      console.error(err);
    } else {
      const jsonResultArray = resultToJSON(results);
      handleResult(jsonResultArray);
    }
  }
);

// The result of the query method is converted into the normal JSON object using Object.assign method in this method
// Returns an array of JSON objects
// Refer - https://github.com/mysqljs/mysql/issues/1330
const resultToJSON = (resultRowsArray) => {
  return resultRowsArray.map((mysqlObj) => Object.assign({}, mysqlObj));
};

const handleResult = (resultArray) => {
  console.log(resultArray);
};
