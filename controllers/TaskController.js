const TaskCrudService = require("../services/TaskCrudService");

class TaskController {
	listAll = async (req, res) => {
		const response = await TaskCrudService.select();
		return res.status(response.status).json(response.data);
	};
	listOne = async (req, res) => {
		const response = await TaskCrudService.select(req.params.taskId);
		return res.status(response.status).json(response.data);
	};
	create = async (req, res) => {
		const { name, description, file } = req.body;
		const response = await TaskCrudService.create(name, description, file);
		return res.status(response.status).json(response.data);
	};
	update = async (req, res) => {
		const { name, description, file } = req.body;
		const response = await TaskCrudService.update(req.params.taskId, name, description, file);
		return res.status(response.status).json(response.data);
	};
	delete = async (req, res) => {
		const response = await TaskCrudService.delete(req.params.taskId);
		return res.status(response.status).json(response.data);
	};
}

module.exports = new TaskController();
