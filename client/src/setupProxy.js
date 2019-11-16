const proxy = require("http-proxy-middleware");



module.exports = function(app) {
    app.use(
      proxy(["/api/users"], { target: "http://localhost:3000"  })
    );

    app.use(
      proxy(["/api/mission"], { target: "http://localhost:3000" })
    );

    app.use(
      proxy(["/api/donations"], { target: "http://localhost:3000"})
    );
  };