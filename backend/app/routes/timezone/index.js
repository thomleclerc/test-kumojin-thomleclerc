const router = require("express").Router();

router.get("/server", require("./get.timezone.server.action"));

module.exports = router;
