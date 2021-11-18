const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "http://localhost";

app.listen(port, () => {
	console.log(`To do list API listening at ${host}:${port}`);
});
