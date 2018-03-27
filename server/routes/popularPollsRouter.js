const express = require('express');

const popularPollsRouter = express.Router();
const { getPopularPolls, sendResponse } = require('../middlewares/popularPolls');

popularPollsRouter.get('', [getPopularPolls, sendResponse]);

module.exports = popularPollsRouter;
