// imports
const express = require("express");
const logger = require("../middleware/logger.js");

// fake temp data
const comments = require("./data/comments");

// routes
const userRoutes = require("../routes/users");
const taskRoutes = require("../routes/tasks");
const commentRoutes = require("../routes/comments");

const app = express();
const port = 3000;

// register routes
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
// app.use("/comments", commentRoutes);

// middleware
// error handler
const errorLog = (err, req, res, next) => {
  res.status(400).send(err.message);
};

// register middleware
app.use(errorLog);
app.use(logger);

app.get("/", (req, res) => {
  res.send("App root!");
});

app.get("/api", (req, res) => {
  res.send("Welcome to the API!");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
});
