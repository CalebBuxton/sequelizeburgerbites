var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
	mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: "",
		database: "burgers_db"
	})
};

connection.connect(function(error) {
	if (error) throw error;
	console.log("connected")
})

module.exports = connection;