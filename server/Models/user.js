const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});

const User = mongoose.model("users", UserSchema); //'users' is name of collection

module.exports = User;