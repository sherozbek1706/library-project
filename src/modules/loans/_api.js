const { post_loans, get_loans, show_loans } = require("./_controller");
const isLoggedIn = require("../../shared/auth/isloggedIn");
const router = require("express").Router();

router.post("/loan", isLoggedIn, post_loans);
router.get("/loans", isLoggedIn, get_loans);
router.get("/loans/:id", isLoggedIn, show_loans);

module.exports = router;
