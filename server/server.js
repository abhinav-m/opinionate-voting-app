const express = require('express');

const app = express();

// const popularPollsRouter = require('./routes/popularPollsRouter');
const allpollsRouter = require('./routes/pollsRouter');
// const newPollRouter = require('./routes/newPollRouter');
const getPollRouter = require('./routes/getPollRouter');

const port = process.env.PORT || 3000;

// app.use('/', popularPollsRouter);
app.use('/polls', allpollsRouter);
// app.use('/new', newPollRouter);
app.use('/poll/', getPollRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
