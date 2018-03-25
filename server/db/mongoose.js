const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

module.exports = db;
