const isLoggedIn = require("../../shared/auth/isloggedIn");
const hasRole = require("../../shared/auth/hasRole");
const {
  login_admins,
  post_admins,
  get_admins,
  show_admins,
  edit_admins,
} = require("./_controller");

const router = require("express").Router();

router.post("/login", login_admins);
router.post("/admins", isLoggedIn, post_admins);
router.get("/admins", isLoggedIn, get_admins);
router.get("/admins/:id", isLoggedIn, show_admins);
router.patch("/admins/:id", isLoggedIn, hasRole, edit_admins);

module.exports = router;
