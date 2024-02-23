const express = require("express");
const logger = require("../middleware/logger.js");

// instantiate router
const router = express.Router();

// middleware
router.use(logger);

// user page routes
router
  .route("/")
  .get((req, res) => {
    res.send(`comment route - get: ${temp}`);
  })
  .post((req, res) => {
    res.send(`comment route - post: ${temp}`);
  })
  .delete((req, res) => {
    res.send(`comment route - delete: ${temp}`);
  });

module.exports = router;
