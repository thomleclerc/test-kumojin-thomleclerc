const router = require("express").Router();

router.get("/", require("./get.timezone.action"));

module.exports = router;
