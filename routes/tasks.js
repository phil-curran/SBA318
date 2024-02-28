const express = require("express");
const routeLogger = require("../middleware/routeLogger.js");
const getUser = require("../utilities/getUser.js");
const deleteTask = require("../utilities/deleteTask.js");
const bodyParser = require("body-parser");

// instantiate router
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json({ extended: true }));

// import data
let tasks = require("../data/tasks.js");
let users = require("../data/users.js");
let comments = require("../data/comments.js");

// middleware
router.use(routeLogger);
router.use(express.json());

// ROUTES
// create task
router.route("/").post((req, res, next) => {
  let id = tasks.length + 1;
  let userId = req.body.userId;
  let title = req.body.title;
  let content = req.body.content;
  let dateAdded = new Date();
  let task = { id, userId, title, content, dateAdded };
  tasks.push(task);
  res.redirect(303, "/");
});

// read: get all tasks
router
  .route("/")
  // read
  .get((req, res, next) => {
    res.json(tasks);
  });

// read: get specific task
router.route("/:id").get((req, res, next) => {
  const task = tasks.find((task) => task.id == req.params.id);
  let user = getUser(task.userId);
  console.log(task);
  !task
    ? (console.log("Task not found"),
      res.status(404).json({ error: "Task not found" }))
    : res.render("task-detail", { task, tasks, user, comments, getUser });
});

// update task
router.route("/").put((req, res, next) => {
  res.send(
    `Method: ${req.method}\nStatus: ${res.statusCode}\nPath: ${req.baseUrl}`
  );
});

// delete task
router.route("/:id").delete((req, res, next) => {
  deleteTask(req.params.id);
  res.redirect("index", { tasks });
});

module.exports = router;
