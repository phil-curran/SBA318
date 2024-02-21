const express = require("express");
const app = express();
const port = 3000;

// fake temp data
const users = require("./data/users");
const tasks = require("./data/tasks");
const comments = require("./data/comments");

// routes
const userRoutes = require("../routes/user");
const taskRoutes = require("../routes/task");
const commentRoutes = require("../routes/comment");

// register routes
// app.use("/user", userRoutes);
// app.use("/task", taskRoutes);
// app.use("/comment", commentRoutes);

// middleware
// error handler
const errorLog = (err, req, res, next) => {
  res.status(400).send(err.message);
};
// event logging
const reqLog = function (req, res, next) {
  console.log(`Request received from: ${req.url}`);
  next();
};

// register middleware
app.use(errorLog);
app.use(reqLog);

app.get("/", (req, res) => {
  res.send("App root!");
});

app.get("/api", (req, res) => {
  res.send("Welcome to the API!");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
