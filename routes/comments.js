const express = require("express");
const routeLogger = require("../middleware/routeLogger.js");

// instantiate router
const router = express.Router();

// import data
const comments = require("../data/comments.js");

// middleware
router.use(routeLogger);

// CREATE / Post Routes
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
    res.json(comments);
  })
  // update
  .put((req, res) => {
    res.send(
      `Method: ${req.method}\nStatus: ${res.statusCode}\nPath: ${req.baseUrl}`
    );
  })
  // delete
  .delete((req, res) => {
    res.send(
      `Method: ${req.method}\nStatus: ${res.statusCode}\nPath: ${req.baseUrl}`
    );
  });

router.route("/:id").get((req, res) => {
  const comment = comments.find((comment) => comment.id == req.params.id);
  !comment
    ? (console.log("Comment not found"),
      res.status(404).json({ error: "Comment not found" }))
    : res.json(comment);
});

module.exports = router;
