const express = require("express");
const routeLogger = require("../middleware/routeLogger.js");
const bodyParser = require("body-parser");

// instantiate router
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json({ extended: true }));

// import data
let tasks = require("../data/tasks.js");

// middleware
router.use(routeLogger);
router.use(express.json());

// ROUTES
router
  .route("/")
  // create
  .post((req, res, next) => {
    let id = tasks.length + 1;
    let userId = req.body.userId;
    let title = req.body.title;
    let content = req.body.content;
    let dateAdded = new Date();
    let temp = { id, userId, title, content, dateAdded };
    tasks.push(temp);
    res.render("index", { tasks });
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
  // get specific task
  .get((req, res, next) => {
    const task = tasks.find((task) => task.id == req.params.id);
    !task
      ? (console.log("Task not found"),
        res.status(404).json({ error: "Task not found" }))
      : // : res.json(task);
        res.render("task-detail", { task });
  })
  // delete
  .delete((req, res, next) => {
    tasks = tasks.filter((task) => req.params.id != task.id);
    // res.json(tasks);
    res.redirect("index", { tasks });
    // res.render("index", { tasks });
  });

module.exports = router;
