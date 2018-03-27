require('./config/config');

const mongoose = require('mongoose');
const express = require('express');

// Set up mongoose connection
const dbUrl = 'mongodb://localhost:27017/opinionate';
const mongoDB = process.env.MONGODB_URI || dbUrl;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:')); //eslint-disable-line

const app = express();

// const popularPollsRouter = require('./routes/popularPollsRouter');
const allpollsRouter = require('./routes/pollsRouter');
// const newPollRouter = require('./routes/newPollRouter');
const getPollRouter = require('./routes/getPollRouter');

const port = process.env.PORT || 3000;

// app.use('/', popularPollsRouter);
// app.use('/new', newPollRouter);

app.use('/polls', allpollsRouter);
app.use('/poll', getPollRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
