const { login_admins } = require("./_controller");

const router = require("express").Router();

router.post("/login", login_admins);

module.exports = router;
