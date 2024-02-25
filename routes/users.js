const express = require("express");
const routeLogger = require("../middleware/routeLogger.js");

// import data
const users = require("../data/users.js");

// instantiate router
const router = express.Router();

// middleware
router.use(routeLogger);

// routes

router
  .route("/")
  // create
  .post((req, res) => {
    res.send(
      `Method: ${req.method}\nStatus: ${res.statusCode}\nPath: ${req.baseUrl}`
    );
  })
  // read
  .get((req, res) => {
    res.json(users);
  })
  // update
  .put((req, res) => {
    res.send("Update Route");
  })
  // delete
  .delete((req, res) => {
    res.send("Delete Route");
  });

// get specific user
router.route("/:id").get((req, res) => {
  const user = users.find((user) => user.id == req.params.id);
  !user
    ? (console.log("User not found"),
      res.status(404).json({ error: "User not found" }))
    : res.json(user);
});

module.exports = router;
