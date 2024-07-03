const express = require("express");
const router = express.Router();

// Assuming you have a dignocenter controller
const dignocenterController = require("../controllers/dignocenter");

// Define your routes here
router.get("/", dignocenterController.getData);

module.exports = router;
