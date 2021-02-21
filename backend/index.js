const createServer = require("./server");

const PORT = 3009;
const app = createServer();
app.listen(PORT, () =>
  console.log(`Application écoute sur http://localhost:${PORT}`)
);
