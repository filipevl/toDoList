const express = require("express");
const route = express();
const TaskController = require("../controllers/TaskController");
const { body } = require("express-validator");
const verify = require("../services/TaskMiddleware");

route
	.get("/", TaskController.listAll)
	.get("/:taskId", TaskController.listOne)
	.post(
		"/",
		body("name").isString().withMessage("Name need be string"),
		body("description").isString().withMessage("Description need be string"),
		body("file").isString().withMessage("File need be string"),
		verify,
		TaskController.create
	)
	.put(
		"/:taskId",
		body("name").isString().withMessage("Name need be string"),
		body("description").isString().withMessage("Description need be string"),
		body("file").isString().withMessage("File need be string"),
		verify,
		TaskController.update
	)
	.delete("/:taskId", TaskController.delete);

module.exports = route;
