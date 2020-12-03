// get the client
const mysql = require('mysql2');

// create the connection to database
const connection =  mysql.createConnection({host: "SG-mhqteam1-3460-master.servers.mongodirector.com", user: '<user>', password: '<password>', database: <your-database-name>, port: 3306, ssl:{ca:fs.readFileSync('<ca-cert filename>')}});

// simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function (err, results) {
    console.log(results);
  }
);
