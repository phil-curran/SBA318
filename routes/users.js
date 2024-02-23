const express = require("express");
const routeLogger = require("../middleware/routeLogger.js");

// import data
const users = require("../backend/data/users");

// instantiate router
const router = express.Router();

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
  res.json(users);
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
