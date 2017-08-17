var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json( { type: "application/vnd.api+json" }));
app.use(express.static("public"));

//FILL IN ROUTES HERE
require("./routes/")(app)


db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, function() {
		console.log("Listening on " + PORT);
	});
});

