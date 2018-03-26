const express = require('express');

const popularPollsRouter = express.Router();
const { getPopularPolls, sendResponse } = require('../middlewares/landingMiddleware');

popularPollsRouter.get('', [getPopularPolls, sendResponse]);

module.exports = popularPollsRouter;
