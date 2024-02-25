// imports
const express = require("express");
const routeLogger = require("../middleware/routeLogger.js");
const errorLogger = require("../middleware/errorLogger.js");
const fs = require("fs");

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
app.use("/comments", commentRoutes);

// middleware
// register middleware
app.use(errorLogger);
app.use(routeLogger);

app.get("/", (req, res) => {
  res.send("App root!");
});

app.get("/api", (req, res) => {
  res.send("Welcome to the API!");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
});
