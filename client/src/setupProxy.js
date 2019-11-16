const proxy = require("http-proxy-middleware");
const users = require("../../routes/api/users");



module.exports = function(app) {
    app.use(
      proxy(["/api/users"], { target: "http://localhost:5000" })
    );
  };