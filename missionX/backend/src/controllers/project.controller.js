const { getAllProjects } = require('../models/project.model');
const { resultToJSON } = require('../utils');

const get = async (req, res) => {
  // if(some parameter is missing in the request) {
  //   console.error(e);
  //   res.status(400).end();
  // }
  // else {}
  const queryResult = await getAllProjects('ABW');
  const jsonResult = resultToJSON(queryResult);
  res.status(200).json(jsonResult);
};

const getOne = async (req, res) => {
  res.status(200).json({ user: 'sebinbenjamin' });
};

const update = async (req, res) => {
  res.status(200).json({ user: 'sebinbenjamin' });
};

module.exports = { get, getOne, update };
