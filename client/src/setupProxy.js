const proxy = require("http-proxy-middleware");
const users = require("../../routes/API/users");


module.exports = function(app) {
    app.use(
      proxy([("/api/mission", mission)], { target: "http://localhost:5000" })
    );
  };