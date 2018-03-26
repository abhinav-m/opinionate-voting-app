const { Poll } = require('../db/models/Poll');

const searchPoll = (req, res, next) => {
  Poll.find({ _id: req.id })
    .then((poll) => {
      req.doc = poll;
      next();
    })
    .catch(e => res.status(400).send());
};

const sendResponse = (req, res) => {
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
