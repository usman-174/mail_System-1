const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");
const sendCookie = require("../utils/sendCookie");
const { v4 } = require("uuid");
const signup = async (req, res) => {
  const { name, email, password, designation, department } = req.body;

  try {
    if (!name || !email || !password || !designation || !department) {
      return res.json({ error: "Please fill all fields" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(500).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      designation,
      department,
    });

    // Assigning the token
    const token = jwt.sign(
      {
        //  email: newUser.email,
        id: newUser._id,
      },
      "Secret",
      {
        expiresIn: "1h",
      }
    );

    // SENDING Cookies with the token in it

    res.set(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 3600,
        path: "/",
      })
    );

    res.status(200).json({ theUser: newUser });
  } catch (error) {
    console.log(error);
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.json({ error: "Please fill all fields" });
    }

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return res.status(500).json({ error: "User doesn't exists" });
    }

    // comparing passwords
    const isPasswordCorrect = await bcrypt.compare(
      password,
      foundUser.password
    );

    if (!isPasswordCorrect) {
      res.status(500).json({ error: "Password invalid" });
    }

    // Assigning the token
    const token = jwt.sign(
      {
        // email: foundUser.email,
        id: foundUser._id,
      },
      "Secret",
      {
        expiresIn: "1h",
      }
    );

    res.set(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 3600,
        path: "/",
      })
    );

    res.status(200).json({ user: { ...foundUser, password: undefined } });
    // res.status(200).json({ theUser: foundUser, token });
  } catch (error) {
    console.log(error);
  }
};

const getMe = async (req, res) => {
  return res
    .status(200)
    .json({ user: { ...req.user._doc, password: undefined } });
};
const logout = async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ success: true });
};
const googleLogin = async (req, res) => {
  try {
    const { email, name, googleId } = req.body;
    if (!email || !name || googleId)
      return res.json({ error: "Invalid Arguments" });

    const exist = await User.findOne({ email, googleId }).select("-password");

    if (exist) {
      // Assigning the token and Sending Cookie
      await sendCookie(exist, res);
      return res.status(200).json({ user: exist });
    }
    const pass = email + "dwadw" + googleId;
    const hashedPassword = await bcrypt.hash(pass, 12);
    const newUser = new User({
      email,
      name,
      googleId,
      origin: "google",
      password: hashedPassword,
    });
    await newUser.save();
    sendCookie(newUser, res);
    return res.status(200).json({ user: { ...newUser, password: undefined } });
  } catch (error) {
    console.log(error);
    res.json({ error: "Something went wrong" });
  }
};

module.exports = { signin, signup, getMe, logout, googleLogin };
