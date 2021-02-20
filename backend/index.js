const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const PORT = 3009;

app.use("/api", require("./app/routes"));
app.listen(PORT, () =>
  console.log(`Application écoute sur http://localhost:${PORT}`)
);
