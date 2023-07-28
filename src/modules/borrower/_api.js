const { post_borrowers, get_borrowers } = require("./_controller");
const isLoggedIn = require("../../shared/auth/isloggedIn");
const router = require("express").Router();

router.post("/borrower", isLoggedIn, post_borrowers);
router.get("/borrower", isLoggedIn, get_borrowers);

module.exports = router;
