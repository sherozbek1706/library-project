const { post_borrowers } = require("./_controller");

const router = require("express").Router();

router.post("/borrower", post_borrowers);

module.exports = router;
