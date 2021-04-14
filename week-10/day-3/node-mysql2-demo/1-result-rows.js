// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  database: "mhq",
  user: "mhqDemo",
  password: "mhqDemo123!@#",
});

// A helper method to convert the result into proper JSON.
const parseResultToJSON = (resultObj) => JSON.parse(JSON.stringify(resultObj));

// simple query
connection.query("SELECT * FROM `MHQStudent`", (err, results, fields) => {
  const jsonResults = parseResultToJSON(results);
  console.log(jsonResults); // results contains rows returned by server
});

