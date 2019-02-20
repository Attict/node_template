const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

mongoose.model('User', userSchema);
module.exports = mongoose.model('User');
