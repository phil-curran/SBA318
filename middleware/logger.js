const logger = (req, res, next) => {
  console.log("---");
  console.log("Path: ", req.originalUrl);
  console.log("Method: ", req.method);
  console.log("Status: ", res.statusCode);
  console.log("---");
  next();
};

module.exports = logger;
