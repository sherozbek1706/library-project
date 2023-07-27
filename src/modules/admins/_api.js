const isLoggedIn = require("../../shared/auth/isloggedIn");
const { login_admins } = require("./_controller");

const router = require("express").Router();

router.post("/login", isLoggedIn, login_admins);

module.exports = router;
