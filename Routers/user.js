const router = require("express").Router();
const userController = require("../Controller/user");
router.route("/signup").post(userController.addUser);
router.route("/login").post(userController.login);
router.route("/add-to-cart").post(userController.addToCart);
router.route("/get-the-cart").post(userController.getTheCart);
// removeCart
router.route("/removeCart").post(userController.removeCart);

module.exports = router;
