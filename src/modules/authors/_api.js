const {
  post_author,
  get_author,
  show_author,
  edit_author,
  delete_author,
} = require("./_controller");
const isLoggedIn = require("../../shared/auth/isloggedIn");
const router = require("express").Router();

router.post("/author", isLoggedIn, post_author);
router.get("/author", isLoggedIn, get_author);
router.get("/author/:id", isLoggedIn, show_author);
router.patch("/author/:id", isLoggedIn, edit_author);
router.delete("/author/:id", isLoggedIn, delete_author);

module.exports = router;
