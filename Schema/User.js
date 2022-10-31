const mongoose = require("mongoose");

const userModel = mongoose.model("userCollection", {
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  cart: [],
});

module.exports = userModel;
