const path = require("path");
const router = require("express").Router();

// Book routes
router.use("/books", require("./books"));

// Google Routes
router.use("/google", require("./google"));

module.exports = router;
