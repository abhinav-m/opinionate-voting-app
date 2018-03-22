const express = require('express');

const landingRouter = express.Router();
const { getPopularPolls, sendResponse } = require('../middlewares/landingMiddleware');

landingRouter.get('', [getPopularPolls, sendResponse]);

module.exports = landingRouter;
