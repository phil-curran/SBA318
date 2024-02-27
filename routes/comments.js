const express = require("express");
const routeLogger = require("../middleware/routeLogger.js");

// instantiate router
const router = express.Router();

// import data
let comments = require("../data/comments.js");

// middleware
router.use(routeLogger);
router.use(express.json());

// ROUTES
// create comment
router.route("/").post((req, res, next) => {
  // let { userId, taskParent, commentParent, title, content } = req.body;
  let temp = { ...req.body };
  temp.id = comments.length + 1;
  comments.push(temp);
  res.send(comments);
});

// get all comments
router.route("/").get((req, res, next) => {
  res.json(comments);
});

// get specific comment
router
  .route("/")
  // create
  .post((req, res, next) => {
    // let { userId, taskParent, commentParent, title, content } = req.body;
    let temp = { ...req.body };
    temp.id = comments.length + 1;
    comments.push(temp);
    res.send(comments);
  });

// update comment
router.route("/").put((req, res, next) => {
  res.send(
    `Method: ${req.method}\nStatus: ${res.statusCode}\nPath: ${req.baseUrl}`
  );
});

// delete comment
router.route("/:id").delete((req, res, next) => {
  comments = comments.filter((comment) => req.params.id != comment.id);
  res.json(comments);
});

module.exports = router;
