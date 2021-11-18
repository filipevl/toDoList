const express = require("express");
const route = express();
const tasks = require("./tasks")

route.use(tasks)

module.exports = route;
