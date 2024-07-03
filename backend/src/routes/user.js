const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

// Define your middleware function
const exampleMiddleware = (req, res, next) => {
  console.log("Middleware function executed");
  next();
};

router.post("/register", exampleMiddleware, userController.register);

module.exports = router;
