module.exports = function(sequelize, DataTypes) {
	var burgers = sequelize.define("burgers", {
		burger_name: DataTypes.STRING,
		devoured: { type: DataTypes.BOOLEAN, defaultValue: false },
		createdAt: { type: DataTypes.DATE, defaultValue: sequelize.fn('NOW'), allowNull: false },
		updatedAt: { type: DataTypes.DATE, defaultValue: sequelize.fn('NOW'), allowNull: false }
	});
	return burgers;
};