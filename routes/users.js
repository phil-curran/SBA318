const express = require("express");
const routeLogger = require("../middleware/routeLogger.js");

// instantiate router
const router = express.Router();

// import data
let users = require("../data/users.js");

// middleware
router.use(routeLogger);
router.use(express.json());

// ROUTES

const base = router.route("/");

// create user
router.route("/").post((req, res, next) => {
  let temp = { ...req.body };
  temp.id = users.length + 1;
  users.push(temp);
  res.send(users);
});

// get all users
router.route("/").get((req, res) => {
  res.json(users);
});

// get specific user
router.route("/:id").get((req, res) => {
  const user = users.find((user) => user.id == req.params.id);
  !user
    ? (console.log("User not found"),
      res.status(404).json({ error: "User not found" }))
    : res.json(user);
});

// update user
router.route("/").put((req, res) => {
  res.send("Update Route");
});

// delete user
router.route("/:id").delete((req, res, next) => {
  users = users.filter((user) => req.params.id != user.id);
  res.json(users);
});

module.exports = router;
