const jwt = require("jsonwebtoken");
const secret = "secret";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    const isCustomAuth = token.length < 500;
    console.log(isCustomAuth);
    let decodedData;

    if (token && isCustomAuth) {
      console.log("Invalid signature");
      decodedData = jwt.verify(token);
      console.log(decodedData);
      req.userId = decodedData?.id;
    } else {
      // For google Auth
      decodedData = jwt.decode(token);
      console.log("Google auth");
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    //     console.log(error);
  }
};
module.exports = auth;
