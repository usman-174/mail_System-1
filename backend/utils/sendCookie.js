const jwt = require("jsonwebtoken")
const cookie = require("cookie")
const sendCookie = async(user, res) => {
  // Assigning the token
  try {
    
  const token =  jwt.sign(
    {
      // email: foundUser.email,
      id: user._id,
    },
    "Secret",
    {
      expiresIn: "1h",
    }
  )

  res.set(
    "Set-Cookie",
    cookie.serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600,
      path: "/",
    })
  )
  } catch (error) {
      console.log(error.message);
  }
  
}

module.exports = sendCookie