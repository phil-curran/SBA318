const express = require("express");
const router = express.Router();

let temp = "temp";

// middleware
router.use((req, res, next) => {
  console.log(`user route request: ${temp}`);
  next();
});

// user page routes
router
  .route("/")
  .get((req, res) => {
    res.send(`user route - get: ${temp}`);
  })
  .post((req, res) => {
    res.send(`user route - post: ${temp}`);
  })
  .delete((req, res) => {
    res.send(`user route - delete: ${temp}`);
  });

module.exports = router;
