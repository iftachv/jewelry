const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
var cookieParser = require("cookie-parser");
const user = require("./Routers/user");
const app = express();
const mongoose = require("mongoose");
const { json } = require("body-parser");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  cart: [{
    url: String,
    description: String,
    price: Number
  }
  ]
})

const userModel = new model('user', userSchema)

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/user", user);

app.get("/:user/remove-from-cart/:index", (req, res) => {
  const index = "cart." + req.params.index;
  console.log(index);
  console.log(user);
  userModel.updateOne({ user: user }, { $unset: { [index]: 1 } })
  userModel.updateOne({}, { $pull: { "cart": null } })
  res.send("")
})


mongoose.connect(
  "mongodb+srv://firstapp:OzDYeqeWwP7YJKPA@cluster0.33buyfe.mongodb.net/myfurstapp",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log("listen on port: ", port);
});


