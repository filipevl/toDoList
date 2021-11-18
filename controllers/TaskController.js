const TaskCrudService = require("../services/TaskCrudService");

class TaskController {
	listAll = (req, res) => {
		const tasks = TaskCrudService.select();
		res.json(tasks);
	};
	listOne = (req, res) => {
		const task = TaskCrudService.select(req.params.taskId);
		res.json(task);
	};
	create = (req, res) => {
		const { name, description, file } = req.body;
		const task = TaskCrudService.create(name, description, file);
		res.json(task);
	};
	update = (req, res) => {
		const { name, description, file } = req.body;
		const tasks = TaskCrudService.update(req.params.taskId, name, description, file);
		res.json(tasks);
	};
	delete = (req, res) => {
		const task = TaskCrudService.delete(req.params.taskId);
		res.json(task);
	};
}

module.exports = new TaskController();
