// imports
const express = require("express");
const bodyParser = require("body-parser");
const routeLogger = require("./middleware/routeLogger.js");
const errorLogger = require("./middleware/errorLogger.js");

// fake temp data
const users = require("./data/users.js");
const tasks = require("./data/tasks.js");
const comments = require("./data/comments.js");

// routes
const userRoutes = require("./routes/users.js");
const taskRoutes = require("./routes/tasks.js");
const commentRoutes = require("./routes/comments.js");

const app = express();
const port = 3000;

// register routes
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
app.use("/comments", commentRoutes);

// set view engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./public"));

// register middleware
app.use(errorLogger);
app.use(routeLogger);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.render("index", { tasks });
});

app.get("/add-task", (req, res) => {
  res.render("add-task");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
});
