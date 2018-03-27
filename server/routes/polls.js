const express = require('express');

const { getAllPolls, sendResponse } = require('../middlewares/pollsMiddleware');

const pollsRouter = express.Router();

pollsRouter.get('', [getAllPolls, sendResponse]);

module.exports = pollsRouter;
