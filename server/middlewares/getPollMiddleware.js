const { Poll } = require('../db/models/Poll');

const searchPoll = (req, res, next) => {
  debugger; //eslint-disable-line
  Poll.findOne({ _id: req.params.id })
    .then((poll) => {
      req.doc = poll._doc;
      next();
    })
    .catch(e => res.status(400).send());
};

const sendResponse = (req, res) => {
  debugger; //eslint-disable-line
  const poll = req.doc;
  if (poll) {
    res.send(poll);
  } else {
    res.status(404).send({ Error: 'Poll not found' });
  }
};

module.exports = {
  searchPoll,
  sendResponse,
};
