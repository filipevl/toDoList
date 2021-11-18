const express = require("express");
const route = express();
const TaskController = require("../controllers/TaskController")

route.get("/", TaskController.listAll)
    .get("/:taskId", TaskController.listOne)
    .post("/", TaskController.create)
    .put("/:taskId", TaskController.update)
    .delete("/:taskId", TaskController.delete)

module.exports = route;
