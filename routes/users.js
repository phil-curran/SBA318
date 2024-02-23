const express = require("express");
const logger = require("../middleware/logger.js");

// import data
const users = require("../backend/data/users");

// instantiate router
const router = express.Router();

// middleware
router.use(logger);

// CREATE / Post Routes
router.route("/").post((req, res) => {
  res.send(`user route - post: ${req.baseUrl}`);
});

// READ / Get Routes
router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  res.send(`user route - get: ${req.baseUrl}/${req.params.id}`);
});

// UPDATE / Put Routes
router.route("/").put((req, res) => {
  res.send(`user route - post: ${req.baseUrl}`);
});

// DELETE / Delete Routes
router.route("/").delete((req, res) => {
  res.send(`user route - delete: ${req.baseUrl}`);
});

module.exports = router;
