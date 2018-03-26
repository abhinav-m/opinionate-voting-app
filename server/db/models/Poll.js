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
});

module.exports = { Poll };
