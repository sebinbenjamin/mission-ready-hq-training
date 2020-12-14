// HELLO='Dave' WORLD="Jane" node envVariables-3.js

const dotenv = require('dotenv');
// loads environment variables from .env file
// However, directly passed environment variables take priority.
dotenv.config();

console.log('The value of process.env.HELLO is', process.env.HELLO); // Prints 'Dave'
console.log('The value of process.env.WORLD is', process.env.WORLD); // Prints  'Jane'
