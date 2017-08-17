module.exports = function(sequelize, DataTypes) {
	var burgers = sequelize.define("Burger", {
		burger_name: DataTypes.STRING,
		devoured: { DataTypes.BOOLEAN, defaultValue: false },
		date: DataTypes.NOW
	});
	return burger;
};