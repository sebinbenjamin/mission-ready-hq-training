const dotenv = require('dotenv');
// loads environment variables from .env file
dotenv.config();

console.log('The value of process.env.HELLO is', process.env.HELLO);
console.log('The value of process.env.WORLD is', process.env.WORLD);
