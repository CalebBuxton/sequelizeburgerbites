var db = require("../models");

module.exports = function(app) {
  app.get("/api/burgers", function(req, result) {
  	db.burgers.findAll({}).then(function(allBurgers) {
  		result.json(allBurgers)
  	})
  });

  app.post("/api/burgers", function(req, result) {
    console.log(req);
  	db.burgers.create({
  		burger_name: req.body.name
  	}).then(function(allBurgers) {
      result.json(allBurgers)
    });
  });

  app.put("/api/burgers", function(req, result) {
  	db.burgers.update({
  		devoured: true
  	}, {
  		where: {
  			id: req.body.id
  		}
  	}).then(function(updateBurgers) {
  		result.json(updateBurgers);
  	});
  });
};