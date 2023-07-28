const {
  post_publisher,
  get_publisher,
  show_publisher,
  edit_publisher,
  delete_publisher,
} = require("./_controller");
const isLoggedIn = require("../../shared/auth/isloggedIn");
const router = require("express").Router();

router.post("/publisher", isLoggedIn, post_publisher);
router.get("/publisher", isLoggedIn, get_publisher);
router.get("/publisher/:id", isLoggedIn, show_publisher);
router.patch("/publisher/:id", isLoggedIn, edit_publisher);
router.delete("/publisher/:id", isLoggedIn, delete_publisher);

module.exports = router;
