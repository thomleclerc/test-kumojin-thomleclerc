const router = require("express").Router();

router.use("/timezone", require("./timezone"));

module.exports = router;
