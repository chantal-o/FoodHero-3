const proxy = require("http-proxy-middleware");



module.exports = function(app) {
    app.use(
      proxy(["/api/users"], { target: "http://localhost:5000"  })
    );

    app.use(
      proxy(["/api/mission"], { target: "http://localhost:5000" })
    );

    app.use(
      proxy(["/api/inventory"], { target: "http://localhost:5000" })
    );
  };