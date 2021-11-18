# To do list API

This is a copyright work I am doing with the aim of practicing Rest API development using the express micro framework.

## Features

- Create Task
- Update Task
- List All Tasks
- List One Task
- Delete One Task

## Tech

This API uses the following open source projects to work correctly:

- [node.js](https://nodejs.org/) - evented I/O for the backend
- [Express](https://expressjs.com/pt-br/) - fast node.js network app framework [@tjholowaychuk]
- [Sequelize](https://sequelize.org/) - Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server

## Installation

This API requires:

- [Node.js](https://nodejs.org/) v10+ to.
- [MYSQL](https://www.mysql.com/).

Install the dependencies, set yours environment variables and start the server.

```sh
cd toDoList
npm i
npx sequelize db:migrate
cp .env.example .env
cp /config/config.example.json /config/config.json
vim .env
vim /config/config.json

```

## Routes

This API responds to the following endpoints:

| Method | Path | Params | Responses |
| ------ | ------ | ------ | ------ |
| GET | / |  | JSON with all tasks |
| GET | /:taskId | taskId | JSON with corresponding tasks |
| POST | / | Name, description or file | JSON with new task |
| PUT | / | Name, description or file | JSON with updated tasks |
| DELETE | /:TaskId | Task id | JSON with deleted task |

## License

MIT

**Free Software, Hell Yeah!**