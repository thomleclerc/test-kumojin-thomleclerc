const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 3009;

app.use("/api", require("./app/routes"));
app.listen(PORT, () =>
  console.log(`Application écoute sur http://localhost:${PORT}`)
);
