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
router
  .route("/")
  // create
  .post((req, res, next) => {
    // let { userId, taskParent, commentParent, title, content } = req.body;
    let temp = { ...req.body };
    temp.id = comments.length + 1;
    comments.push(temp);
    res.send(comments);
  })
  // read
  .get((req, res, next) => {
    res.json(comments);
  })
  // update
  .put((req, res, next) => {
    res.send(
      `Method: ${req.method}\nStatus: ${res.statusCode}\nPath: ${req.baseUrl}`
    );
  });

router
  .route("/:id")
  // get specific comment
  .get((req, res, next) => {
    const comment = comments.find((comment) => comment.id == req.params.id);
    !comment
      ? (console.log("Comment not found"),
        res.status(404).json({ error: "Comment not found" }))
      : res.json(comment);
  })
  // delete
  .delete((req, res, next) => {
    comments = comments.filter((comment) => req.params.id != comment.id);
    res.json(comments);
  });

module.exports = router;
