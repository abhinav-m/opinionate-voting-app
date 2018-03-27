const express = require('express');

const pollController = require('../controllers/pollController');

// const { searchPoll, sendResponse } = require('../middlewares/getPollMiddleware');
// const { savePoll, sendNewResponse } = require('../middlewares/savePoll');

const router = express.Router();

// router.post('/new', [savePoll, sendNewResponse]);

// router.post('/new', pollController.newPoll);
router.get('/:id', pollController.getPoll);

module.exports = router;
