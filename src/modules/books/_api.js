const { post_book, get_book, show_book } = require("./_controller");

const router = require("express").Router();
const isLoggedIn = require("../../shared/auth/isloggedIn");
router.post("/books", isLoggedIn, post_book);
router.get("/books", isLoggedIn, get_book);
router.get("/books/:id", isLoggedIn, show_book);

module.exports = router;
