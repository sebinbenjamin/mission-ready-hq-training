const bcrypt = require('bcrypt');

const getSaltedHash = (password) => {
  // genSaltSync - Generates the salt value used for hashing
  const salt = bcrypt.genSaltSync(5);
  try {
    return bcrypt.hashSync(password, salt);
  } catch (err) {
    console.log('Error', err);
    return err;
  }
};

const checkPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = { getSaltedHash, checkPassword };
