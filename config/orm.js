var connection = require("../config/connection.js");


var handler = {
	selectAll: function(table, cb) {
		var str = "SELECT * FROM " + table + ";";
		connection.query(str, function(error, result) {
			if (error) throw error;
			cb(result)
		})
	},

	insertOne: function(table, name, cb) {
		var str = "INSERT INTO " + table + " (burger_name) VALUES ('" + name + "');";
		connection.query(str, function(error, result){
			if (error) throw error;
			cb(result);
		});
	},

	updateOne: function(table, condition, cb) {
		var str = "UPDATE " + table + " SET devoured = true WHERE " + condition + ";";
		connection.query(str, function(error, result){
			if (error) throw error;
			cb(result);
		});
	}
};

module.exports = handler;