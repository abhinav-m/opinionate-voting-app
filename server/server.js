const express = require('express');

const app = express();

const landingRouter = require('./routes/LandingRouter');

const port = process.env.PORT || 3000;

app.use('/', landingRouter);
app.use('/polls', allpollsRouter);
app.use('/new', newPollRouter);
app.use('/polls/', getPollRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
