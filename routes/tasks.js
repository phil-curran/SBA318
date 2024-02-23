const express = require("express");
const logger = require("../middleware/logger.js");

// instantiate router
const router = express.Router();

// import data
const tasks = require("../backend/data/tasks");

// middleware
router.use(logger);

// CREATE / Post Routes
router.route("/").post((req, res) => {
  res.send(`tasks route - post: ${req.baseUrl}`);
});

// READ / Get Routes
router.get("/", (req, res) => {
  res.json(tasks);
});

router.get("/:id", (req, res) => {
  res.send(`tasks route - get: ${req.baseUrl}/${req.params.id}`);
});

// CREATE / Post Routes
router.route("/").get((req, res) => {
  res.send(`tasks route - get: ${req.baseUrl}`);
});

// UPDATE / Put Routes
router.route("/").put((req, res) => {
  res.send(`tasks route - put: ${req.baseUrl}`);
});

// DELETE / Delete Routes
router.route("/").delete((req, res) => {
  res.send(`tasks route - delete: ${req.baseUrl}`);
});

module.exports = router;
