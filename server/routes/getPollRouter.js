const express = require('express');

const { searchPoll, sendResponse } = require('../middlewares/getPollMiddleware');

const getPollRouter = express.Router();

getPollRouter.get('/:id', [searchPoll, sendResponse]);

module.exports = getPollRouter;
