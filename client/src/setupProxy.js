const proxy = require("http-proxy-middleware");
const users = require("../../routes/API/users");


module.exports = function(app) {
    app.use(
      proxy([("/api/mission", users)], { target: "http://localhost:5000" })
    );
  };