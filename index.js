const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'MedDocs'
});

app.get("/", (req, res) => {
	const queryString = "SELECT * FROM doctors";
	connection.query(queryString, (err, rows, fields) => {
		if (err) {
			console.log("failed to query: " + err);
			res.end();
			return;
		}
		res.json(rows);
	});
});

app.get("/logindoctor", (req, res) => {

});

app.get("/loginpatient", (req, res) => {

});

app.listen(3001, () => {
	console.log("server running on port 3000"); 
});