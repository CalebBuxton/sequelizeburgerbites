var handler = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		handler.selectAll("burgers", function(res) {
			cb(res);
		});
	},

	insertOne: function(name, cb) {
		handler.insertOne("burgers", name, function(res){
			cb(res);
		})
	},

	updateOne: function(condition, cb) {
		handler.updateOne("burgers", condition, function(res){
			cb(res);
		})
	}
};

module.exports = burger;