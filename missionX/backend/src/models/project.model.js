const { connection } = require('../db');

connection.execute(
  'SELECT * FROM `users` WHERE `name` = ? AND `age` > ?',
  ['John Doe', 23],
  (err, results, fields) =>{
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
     // If you execute same statement again, it will be picked from a LRU cache
    // which will save query preparation time and give better performance
  }
);

connection