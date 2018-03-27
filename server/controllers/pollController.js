const { Poll } = require('../db/models/Poll');

const getPoll = (req, res) => {
  Poll.findOne({ _id: req.params.id })
    .then((poll) => {
      if (poll) {
        const doc = poll._doc;
        return res.status(200).send(doc);
      }
      return res.status(404).send({ Error: 'Poll not found' });
    })
    .catch(e => res.status(400).send());
};

module.exports = {
  getPoll,
};
