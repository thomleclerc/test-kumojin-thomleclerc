const router = require("express").Router();

router.get("/timezone", require("./get.timezone.action"));

module.exports = router;
