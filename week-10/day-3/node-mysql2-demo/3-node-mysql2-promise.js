const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  database: "mhq",
  user: "mhqDemo",
  password: "mhqDemo123!@#",
});


// A helper method to convert the DB query result into JSON format.
const parseResultToJSON = (resultRowsArray) =>
  resultRowsArray.map((mysqlObj) => Object.assign({}, mysqlObj));


// A simple query
const runDBQuery = () => {
  const yourQuery = "SELECT * FROM `MHQStudent` WHERE `FirstName`='John'";
  return connection.promise().query(yourQuery);
};

// When a API request is made to localhost:3000, the DB query is executed
app.get("/", (req, res) => {
  runDBQuery()
    .then((queryResult, fields) => {
      const [rows] = queryResult;
      const jsonResults = parseResultToJSON(rows);
      console.log("Sending response for GET", jsonResults);
      // Sends the response if query was successful.
      res.send(jsonResults);
    })
    .catch((error) => {
      console.log(error);
      // Sends an error if the query returned an error.
      res.status(500).send(error);
    });
});

app.listen(3000, () => console.log("Server ready at port 3000"));
