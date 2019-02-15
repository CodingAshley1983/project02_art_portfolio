// TODO portfolio html

var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("*", function(req, res) {
    switch (req.url) {
      case "/":
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
        break;
      case "/admin":
        res.sendFile(path.join(__dirname, "../public/html/admin.html"));
        break;
        case "/commissions":
        res.sendFile(path.join(__dirname, "../public/html/commissions.html"));
        break;
      case "/portfolio":
        res.sendFile(path.join(__dirname, "../public/html/portfolio.html"));
        break;
      default:
        res.sendFile(path.join(__dirname, "../public/html/404.html"));
    }
  });
};
