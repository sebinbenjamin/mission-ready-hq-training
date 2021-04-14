// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  database: "mhq",
  user: "mhqDemo",
  password: "mhqDemo123!@#",
});

// simple query
connection.query("SELECT * FROM `MHQStudent`", (err, results, fields) => {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});
