const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  attempts: { type: Number, default: 0 },
  lastLoginAttempt: String
});

module.exports = mongoose.model('User', userSchema);
