const express = require("express");
const app = express();
const User = require("../Schema/User");
exports.addUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
  const user = await User.findOne({ email: newUser.email });
  if (user !== null) {
    res.send({
      ok: false,
      message: "user with such user name already exists",
    });
  } else {
    await newUser.save().then(() => {
      console.log("user saved");
    });
    res.send({
      ok: true,
      message: "user hase been saved",
    });
  }
};




exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user === null) {
    res.send({
      login: false,
      message: "couldn't login",
    });
  } else {
    if (password !== user.password) {
      res.send({
        login: false,
        message: "couldn't login",
      });
    } else {
      res.send({
        ok: true,
        message: "login has been success fulll",
        name: user.firstName,
      });
    }
  }
};







exports.addToCart = async (req, res) => {
  const { email, url, description, price } = req.body;
  console.log(email);
  const user = await User.findOne({ email });

  const cart = user.cart;

  cart.push({
    url,
    description,
    price,
  });
  await User.update({ email: email }, { cart: cart })
    .then(() => {
      res.send({ ok: true, message: "item hass been add to cart" });
    })
    .catch({ ok: false, message: "cannot add item to cart" });
};
exports.removeCart = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  await User.update({ email: email }, { cart: [] })
    .then(() => {
      res.send({ ok: true, message: "removed" });
    })
    .catch({ ok: false, message: "cannot add item to cart" });
};
exports.getTheCart = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  const cart = user.cart;
  res.send({ ok: true, data: cart });
};
