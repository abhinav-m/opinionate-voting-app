// const db = require('../db/mongoose');
const { Poll } = require('../db/models/Poll');

const searchPoll = (req, res, next) => {
  Poll.find({ _id: req.id })
    .then(poll => res.send({ poll }))
    .catch(e => res.status(400).send());
};

module.exports = searchPoll;
