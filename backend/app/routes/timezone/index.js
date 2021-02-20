const router = require("express").Router();

router.get("/tokyo", require("./get.timezone.tokyo.action"));

module.exports = router;
