const { resultToJSON, getSaltedHash, checkPassword } = require('../utils');
const { getPassword, registerUser } = require('../models/user.model');
const { json } = require('express');

jsonResult = {};

const login = async (req, res) => {
  const { email, password } = req.body;
  const queryResult = await getPassword(email);
  const jsonResult = resultToJSON(queryResult);
  if (jsonResult.length === 0) {
    res.status(201).end();
  } else {
    const [{ password: passwordHash }] = jsonResult;
    const isValidPassword = checkPassword(password, passwordHash);
    if(isValidPassword){
      res.status(200).send('Successfully logged in user!');
    }
    else
    res.status(401).send('Invalid password.');
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const passwordHash = getSaltedHash(password);
  const queryResult = await registerUser(name, email, passwordHash);
  res.status(200).json(queryResult);
};

module.exports = { login, register };
