const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'healthcarerec'
});

connection.on('error', (err) => {
	console.log("connection error: ", err);
})

app.get("/hospitals", (req, res) => {
	const queryString = "SELECT * FROM hospital";
	connection.query(queryString, (err, rows, fields) => {
		if (err) {
			console.log("failed to query: " + err);
			res.end();
			return;
		} else {
			res.json(rows);
		}
	});
});

app.get("/doctors", (req, res) => {
	const queryString = "SELECT * FROM doctor";
	connection.query(queryString, (err, rows, fields) => {
		if (err) {
			console.log("failed to query: " + err);
			res.end();
			return;
		} else {
			res.json(rows);
		}
	});
});


app.get("/doctors/:id", (req, res) => {
	console.log(req.params.id);
	const queryString = "SELECT * FROM doctor WHERE Doctor_id=?";
	connection.query(queryString, [req.params.id], (err, rows, fields) => {
		if (err) {
			console.log("failed to query: " + err);
			res.end();
			return;
		} else {
			res.json(rows);
		}
	});
});

app.get("/doctors/:id/visits", (req, res) => {
	const queryString = "SELECT * FROM visit WHERE Doctor_id=?";
	connection.query(queryString,[req.params.id], (err, rows, fields) => {
		if (err) {
			console.log("failed to query: " + err);
			res.end();
			return;
		} else {
			res.json(rows);
		}
	});
});

app.get("/doctors/:id/patients", (req, res) => {
	const queryString = `SELECT p.* 
						 FROM patient p, visit v 
	                     WHERE p.Id=v.Patient_id && v.Doctor_id=?`;
	connection.query(queryString,[req.params.id], (err, rows, fields) => {
		if (err) {
			console.log("failed to query: " + err);
			res.end();
			return;
		} else {
			res.json(rows);
		}
	});
});

app.get("/patients", (req, res) => {
	const queryString = "SELECT * FROM patient";
	connection.query(queryString, (err, rows, fields) => {
		if (err) {
			console.log("failed to query: " + err);
			res.end();
			return;
		} else {
			res.json(rows);
		}
	});
});

app.get("/patients/:id", (req, res) => {
	console.log(req.params.id);
	const queryString = "SELECT * FROM patient WHERE Id=?";
	connection.query(queryString, [req.params.id], (err, rows, fields) => {
		if (err) {
			console.log("failed to query: " + err);
			res.end();
			return;
		} else {
			res.json(rows);
		}
	});
});

app.get("/visits", (req, res) => {
	const queryString = "SELECT * FROM visit";
	connection.query(queryString, (err, rows, fields) => {
		if (err) {
			console.log("failed to query: " + err);
			res.end();
			return;
		} else {
			res.json(rows);
		}
	});
});

app.get("/visits/:date/patients", (req, res) => {
	console.log(req.params.date);
	const queryString = `SELECT visit.Visit_date, patient.Fname, patient.Lname, doctor.DFname, doctor.DLname
						FROM patient, visit, doctor
						WHERE visit.Patient_id=patient.Id AND visit.Doctor_id = doctor.Doctor_id AND visit.Visit_date=?`;
	connection.query(queryString,[req.params.date], (err, rows, fields) => {
		if (err) {
			console.log("failed to query: " + err);
			res.end();
			return;
		} else {
			res.json(rows);
		}
	});
});

app.listen(3003, () => {
	console.log("server running on port 3003"); 
});

app.post("/api/logindoctor", (req,res) => {
	const email = req.body.email;
	const password = req.body.password;
	// check if user with email and pass exist in database
	const queryString = "SELECT * FROM doctor WHERE Email=? AND Password=?;";
	connection.query(queryString, [email, password], (err, rows, fields) => {
		if (err) {
			res.send({error: err});
		} else {
			// console.log(JSON.parse(rows));
			if(rows.length > 0) {
				// const user = {
				// 	Doctor_id: rows[0].Doctor_id,
				// 	Fname: rows[0].Fname,
				// 	Specialty: rows[0].Speciality,
				// 	email: rows[0].Email,
				// }
				res.json(rows[0]);
			} else {
				res.json({});
			}

		}
	
	});
});

// app.post("/api/loginpatient", (req,res) => {
// 	const email = req.body.email;
// 	const password = req.body.password;

// 	// check if user with email and pass exist in database
// 	const queryString = "SELECT * FROM patients WHERE email=? AND password=?;";
// 	connection.query(queryString, [email, password], (err, rows, fields) => {
// 		if (err) {
// 			console.log("failed to query: " + err);
// 		} else {
// 			res.json(rows);
// 		}
// 	});
// });
