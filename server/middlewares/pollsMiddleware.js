const { Poll } = require('../db/models/Poll');
const mongoose = require('mongoose');

// FIXME: Not sending correct response, probably not able to connect to db.

const getAllPolls = (req, res, next) => {
  debugger; //eslint-disable-line
  Poll.find({})
    .then((polls) => {
      req.docs = polls;
      next();
    })
    .catch((e) => {
      next();
    });
};
const sendResponse = (req, res) => {
  const polls = req.docs;
  if (polls.length > 0) {
    return res.send(polls);
  }
  return res.send({ Error: 'No polls to show' });
};

module.exports = {
  getAllPolls,
  sendResponse,
};
