const express = require("express");
const router = express.Router();
const { allMails } = require("../controller/mails");
const auth = require("../Middleware/auth");

router.get("/", auth, allMails);
// router.post("/", users);
// router.delete("/:id", users);
// router.update("/:id", users);

module.exports = router;
