const express = require("express");
const cors = require("cors");

function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use("/api", require("./app/routes"));
  app.use((req, res, next) => {
    res.sendStatus(404).end();
  });

  return app;
}

module.exports = createServer;
