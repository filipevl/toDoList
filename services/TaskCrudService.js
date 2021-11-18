class TaskCrudService {
	select = (id = null) => {
		const tasks = [
			{
				id: 0,
				name: "Estudar para prova de matemática",
				description: "Procurar no capítulo 3 do livro exercícios e resolver",
			},
			{
				id: 1,
				name: "Estudar para prova de português",
				description: "Procurar no capítulo 4 do livro exercícios e resolver",
			},
			{
				id: 2,
				name: "Estudar para prova de história",
				description: "Procurar no capítulo 1 do livro exercícios e resolver",
			},
			{
				id: 3,
				name: "Estudar para prova de geografia",
				description: "Procurar no capítulo 9 do livro exercícios e resolver",
			},
		];
		return tasks;
	};
	create = (name, description = null, file_path = null) => {
		const task = {
			id: 0,
			name: "Estudar para prova de matemática",
			description: "Procurar no capítulo 3 do livro exercícios e resolver",
		};
		return task;
	};
	update = (taskId, name = null, description = null, file_path = null) => {
		const task = {
			id: 0,
			name: "Estudar para prova de matemática",
			description: "Procurar no capítulo 3 do livro exercícios e resolver",
		};
		return task;
	};
	delete = (id) => {
		const task = {
			id: 0,
			name: "Estudar para prova de matemática",
			description: "Procurar no capítulo 3 do livro exercícios e resolver",
		};
		return task;
	};
}
module.exports = new TaskCrudService();
