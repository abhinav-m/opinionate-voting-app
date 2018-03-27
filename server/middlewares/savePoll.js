const { Poll } = require('../db/models/Poll');

const savePoll = (req, res, next) => {
  const { body } = req;
  const poll = new Poll(body);

  poll
    .save()
    .then((doc) => {
      req.doc = doc;
      next();
    })
    .catch(e => res.send({ Error: 'Error creating poll on server.' }));
};

const sendNewResponse = (req, res) => {
  res.status(200).send(req.doc);
};

module.exports = {
  savePoll,
  sendNewResponse,
};
