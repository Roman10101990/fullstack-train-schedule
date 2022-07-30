const getPath = require("../controller/scheaduleController");
const router = require("express").Router();

router.get("/", getPath);

module.exports = router;