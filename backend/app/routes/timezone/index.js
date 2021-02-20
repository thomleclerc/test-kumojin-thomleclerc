const router = require("express").Router();

router.get("/japan", require("./get.timezone.tokyo.action"));

module.exports = router;
