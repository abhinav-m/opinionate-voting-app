require('./config/config');

const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');

// const index = require('./routes/index');
const polls = require('./routes/polls');
const poll = require('./routes/poll');

// Set up mongoose connection
const dbUrl = 'mongodb://localhost:27017/opinionate';
const mongoDB = process.env.MONGODB_URI || dbUrl;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:')); //eslint-disable-line

const app = express();

app.use(bodyparser.json());

const port = process.env.PORT || 3000;

// app.use('/', index);
// app.use('/polls', polls);
app.use('/poll', poll);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
