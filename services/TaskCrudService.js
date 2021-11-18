const { Task } = require("../models");

class TaskCrudService {
	select = async (id = null) => {
		if (id) {
			try {
				let tasks = await Task.findByPk(id);
				return { status: 200, data: tasks };
			} catch (e) {
				return { status: 500, error: e };
			}
		} else {
			try {
				let tasks = await Task.findAll();
				return { status: 200, data: tasks };
			} catch (e) {
				return { status: 500, error: e };
			}
		}
	};
	create = async (name, description = null, file_path = null) => {
		try {
			let task = await Task.create({ name, description, file_path });
			return { status: 202, data: task };
		} catch (e) {
			return { status: 406, error: e };
		}
	};
	update = async (taskId, name = null, description = null, file_path = null) => {
		try {
			if (taskId === undefined) throw new Error("taskId can't undefined");
			let task = await Task.findByPk(taskId);
			if (name) task.name = name;
			if (description) task.description = description;
			if (file_path) task.file_path = file_path;
			task.save();
			return { status: 202, data: task };
		} catch (e) {
			return { status: 406, error: e };
		}
	};
	delete = async (taskId) => {
		try {
			if (taskId === undefined) throw new Error("taskId can't undefined");
			let task = await Task.findByPk(taskId),
				taskcp = task.dataValues;
			task.destroy();
			return { status: 202, data: taskcp };
		} catch (e) {
			return { status: 406, error: e };
		}
	};
}
module.exports = new TaskCrudService();
