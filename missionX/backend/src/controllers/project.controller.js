const get = (req, res) => {
  res.status(200).json({ user: 'sebinbenjamin' });
};

const getOne = (req, res) => {
  // Gets one particular project with the given ID
  res.status(200).json({ user: 'sebinbenjamin' });
};

const update = async (req, res) => {
  try {
    // Call DB and update
    //
    //
    //
    //
    //
    //
    //
    //
    //
    res.status(200).json({ user: 'sebinbenjamin' });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

module.exports = { get, getOne, update };
