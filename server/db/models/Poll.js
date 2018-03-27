const mongoose = require('mongoose');

const Poll = mongoose.model('Poll', {
  question: {
    type: String,
    required: true,
    trim: true,
    minLength: 10,
  },
  options: [
    {
      name: { type: String, required: true, trim: true },
      count: { type: Number, required: true },
    },
  ],
  totalVotes: {
    type: Number,
    default: 0,
  },
});

module.exports = { Poll };
