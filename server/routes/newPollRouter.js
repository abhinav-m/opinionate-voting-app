const express = require('express');

const newPollRouter = express.Router();

newPollRouter.post('', [savePolltoDB, sendResponse]);

module.exports = newPollRouter;
