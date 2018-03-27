const express = require('express');

const { searchPoll, sendResponse } = require('../middlewares/getPollMiddleware');
const { savePoll, sendNewResponse } = require('../middlewares/savePoll');

const pollRouter = express.Router();

pollRouter.post('/new', [savePoll, sendNewResponse]);

pollRouter.get('/:id', [searchPoll, sendResponse]);

module.exports = pollRouter;
