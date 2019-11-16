const proxy = require("http-proxy-middleware");



module.exports = function(app) {
    app.use(
      proxy(["/api/users"], { target: "http://www.foodhero.ca:5000" })
    );

    app.use(
      proxy(["/api/mission"], { target: "http://www.foodhero.ca:5000" })
    );

    app.use(
      proxy(["/api/donations"], { target: "http://www.foodhero.ca:5000" })
    );
  };