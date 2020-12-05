const bcrypt = require('bcrypt');

// genSaltSync - Generates the salt value used for hashing
// Salt adds randomness to our password hash
// Prevents the rainbow Table attacks
const salt = bcrypt.genSaltSync(10);
const myPlaintextPassword = 'Hello World !';

// hashSync - converts the plain password into a hashed value
let hash1;
try {
  hash1 = bcrypt.hashSync(myPlaintextPassword, salt);
  console.log('Hash Value', hash1);
} catch (err) {
  console.log('Error', err);
}
// compareSync - checks if the hash of a given string is matching another existing hash
// returns a boolean values - true if passwords match and false otherwise
const isValidPassword = bcrypt.compareSync(myPlaintextPassword, hash1);

console.log(
  isValidPassword ? 'Your passwords match' : 'You have the wrong password'
);

console.log(
  bcrypt.compareSync('Another Password', hash1)
    ? 'Passwords Match '
    : 'Wrong Password !'
);
