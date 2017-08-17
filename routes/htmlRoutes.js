var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, result) {
    result.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
