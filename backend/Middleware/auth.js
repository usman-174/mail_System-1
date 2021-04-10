const jwt = require("jsonwebtoken");
const secret = "Secret";
const User = require("../models/userModel");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json({ error: "UnAuthenticated" });

    const decoded = jwt.verify(token, secret);
    if (decoded?.exp * 1000 < new Date().getTime()) {
      res.clearCookie("token");
      throw new Error("TOKEN EXPIRED");
    }
    const exist = await User.findById(decoded?.id);
    if (exist){ req.user = exist;
    return next();}
  } catch (error) {
    console.error("error:", error.message);
  }
};

// const auth = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     console.log(token);
//     const isCustomAuth = token.length < 500;
//     console.log(isCustomAuth);
//     let decodedData;

//     if (token && isCustomAuth) {
//       console.log("Invalid signature");
//       decodedData = jwt.verify(token);
//       console.log(decodedData);
//       req.userId = decodedData?.id;
//     } else {
//       // For google Auth
//       decodedData = jwt.decode(token);
//       console.log("Google auth");
//       req.userId = decodedData?.sub;
//     }

//     next();
//   } catch (error) {
//     //     console.log(error);
//   }
// };
module.exports = auth;
