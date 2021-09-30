const { number } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create student schema & model
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  addedTime: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
