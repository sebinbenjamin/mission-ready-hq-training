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
  if (jsonResult.length === 0) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204#:~:text=The%20HTTP%20204%20No%20Content,included%20in%20such%20a%20response.
    res.status(204).end();
  } else {
    res.status(200).json(jsonResult);
  }
};

const getOne = async (req, res) => {
  res.status(200).json({ user: 'sebinbenjamin' });
};

const update = async (req, res) => {
  res.status(200).json({ user: 'sebinbenjamin' });
};

module.exports = { get, getOne, update };
