const express = require('express');

const app = express();

const landingRouter = require('./routes/LandingRouter');

const port = process.env.PORT || 3000;

app.use('/', landingRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
