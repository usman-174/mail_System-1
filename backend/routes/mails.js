const express = require("express");
const router = express.Router();
const { allMails, sendMail } = require("../controller/mails");
// const auth = require("../Middleware/auth");

router.get("/", allMails);
router.post("/send", sendMail);
// router.delete("/:id", users);
// router.update("/:id", users);

module.exports = router;
