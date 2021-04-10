const express = require("express");
const router = express.Router();
const {
  getSentMails,
  sendMail,
  singleMail,
  getInboxMails,
} = require("../controller/mails");
const auth = require("../Middleware/auth");
// const auth = require("../Middleware/auth");

router.get("/sentmails", auth, getSentMails);
router.get("/inboxmails", auth, getInboxMails);
router.get("/:id", auth, singleMail);
router.post("/send", auth, sendMail);
// router.delete("/:id", users);
// router.update("/:id", users);

module.exports = router;
