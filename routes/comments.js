const express = require("express");
const routeLogger = require("../middleware/routeLogger.js");

// instantiate router
const router = express.Router();

// import data
const comments = require("../backend/data/comments.js");

// middleware
router.use(routeLogger);

// CREATE / Post Routes
router.route("/").post((req, res) => {
  res.send(
    `Method: ${req.method}\nStatus: ${res.statusCode}\nPath: ${req.baseUrl}`
  );
});

// READ / Get Routes
router.get("/", (req, res) => {
  res.json(comments);
});

router.get("/:id", (req, res) => {
  res.send(
    `Method: ${req.method}\nStatus: ${res.statusCode}\nPath: ${req.baseUrl}/${req.params.id}`
  );
});

// UPDATE / Put Routes
router.route("/").put((req, res) => {
  res.send(
    `Method: ${req.method}\nStatus: ${res.statusCode}\nPath: ${req.baseUrl}`
  );
});

// DELETE / Delete Routes
router.route("/").delete((req, res) => {
  res.send(
    `Method: ${req.method}\nStatus: ${res.statusCode}\nPath: ${req.baseUrl}`
  );
});

module.exports = router;
