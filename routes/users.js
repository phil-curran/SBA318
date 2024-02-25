const express = require("express");
const routeLogger = require("../middleware/routeLogger.js");

// import data
const users = require("../data/users.js");

// instantiate router
const router = express.Router();

// middleware
// router.use(routeLogger);

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
  const user = users.find((user) => user.id == req.params.id);
  !user
    ? (console.log("User not found"),
      res.status(404).json({ error: "User not found" }))
    : res.json(user);
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
