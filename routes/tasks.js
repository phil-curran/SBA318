const express = require("express");
const routeLogger = require("../middleware/routeLogger.js");

// instantiate router
const router = express.Router();

// import data
const tasks = require("../data/tasks.js");

// middleware
router.use(routeLogger);
router.use(express.json());

// CREATE / Post Routes
router
  .route("/")
  // create
  .post((req, res, next) => {
    res.send(
      `Method: ${req.method}\nStatus: ${res.statusCode}\nPath: ${req.baseUrl}`
    );
  })
  // read
  .get((req, res, next) => {
    res.json(tasks);
  })
  // update
  .put((req, res, next) => {
    res.send(
      `Method: ${req.method}\nStatus: ${res.statusCode}\nPath: ${req.baseUrl}`
    );
  });

router
  .route("/:id")
  .get((req, res, next) => {
    const task = tasks.find((task) => task.id == req.params.id);
    !task
      ? (console.log("Task not found"),
        res.status(404).json({ error: "Task not found" }))
      : res.json(task);
  })
  // delete
  .delete((req, res, next) => {
    tasks = tasks.filter((task) => req.params.id != task.id);
    res.json(tasks);
  });

module.exports = router;
