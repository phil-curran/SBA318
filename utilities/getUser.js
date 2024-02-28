let users = require("../data/users.js");

const getUser = (arg) => {
  let temp = users.find((user) => {
    return arg === user.id;
  });
  console.log(temp);
};

module.exports = getUser;
