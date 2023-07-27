const isLoggedIn = require("../../shared/auth/isloggedIn");
const { login_admins, post_admins, get_admins } = require("./_controller");

const router = require("express").Router();

router.post("/login", login_admins);
router.post("/admins", isLoggedIn, post_admins);
router.get("/admins", isLoggedIn, get_admins);

module.exports = router;
