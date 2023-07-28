const {
  post_borrowers,
  get_borrowers,
  show_borrowers,
  edit_borrowers,
} = require("./_controller");
const isLoggedIn = require("../../shared/auth/isloggedIn");
const router = require("express").Router();

router.post("/borrowers", isLoggedIn, post_borrowers);
router.get("/borrowers", isLoggedIn, get_borrowers);
router.get("/borrowers/:id", isLoggedIn, show_borrowers);
router.patch("/borrowers/:id", isLoggedIn, edit_borrowers);

module.exports = router;
