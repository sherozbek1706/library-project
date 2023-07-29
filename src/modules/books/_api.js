const post_book = require("./_controller");

const router = require("express").Router();

router.post("/books", post_book);

module.exports = router;
