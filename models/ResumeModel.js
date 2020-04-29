const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Resume must be named'],
  },
  language: {
    type: String,
    required: [true, 'Resume must have language'],
  },
  color: {
    type: String,
    required: [true, 'Resume must have choosen color'],
  },
  fields: {
    type: [String],
    required: [true, 'Resume must have choosen fields'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Resume = mongoose.model('Resume', resumeSchema);
module.exports = Resume;
