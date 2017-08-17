var db = require("../models");

module.exports = function(app) {
  app.get("/api/burgers", function(req, result) {
  	db.burgers.findall({}).then(function(allBurgers) {
  		result.json(allBurgers)
  	})
  });

  app.post("/api/burgers", function(req, result) {
  	db.burgers.create({
  		burger_name: req.body.name
  	});
  });

  app.put("/api/burgers", function(req, result) {
  	db.burgers.update({
  		devoured: "TRUE"
  	}, {
  		where: {
  			id: req.body.id
  		}
  	}).then(function(updateBurgers) {
  		result.json(updateBurgers);
  	});
  });
};