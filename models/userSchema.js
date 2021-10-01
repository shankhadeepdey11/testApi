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
  profileImg: {
    data: Buffer,
    contentType: String,
  },
  userToken: {
    type: String,
  },
  addedTime: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
