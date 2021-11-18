const express = require("express");
const app = express();
const routes = require("./routes")
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require("dotenv").config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "http://localhost";
app.use(routes)


app.listen(port, () => {
	console.log(`To do list API listening at ${host}:${port}`);
});
