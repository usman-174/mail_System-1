const express = require("express");
const router = express.Router();
const {
  signin,
  signup,
  getMe,
  logout,
  googleLogin,
} = require("../controller/users");
const auth = require("../Middleware/auth");

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/me", auth, getMe);
router.post("/logout", logout);
router.post("/googlelogin", googleLogin);

module.exports = router;
