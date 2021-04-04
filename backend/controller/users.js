const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { name, email, password, designation, department } = req.body;

  try {
    if (!name || !email || !password || !designation || !department) {
      return res.json({ message: "Please fill all fields" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(500).json({ message: "User already exists" });
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
      { email: newUser.email, id: newUser._id },
      "Secret",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ theUser: newUser, token });
  } catch (error) {
    console.log(error);
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.json({ message: "Please fill all fields" });
    }

    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      return res.status(500).json({ message: "User doesn't exists" });
    }

    // comparing passwords
    const isPasswordCorrect = await bcrypt.compare(
      password,
      foundUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(500).json({ message: "Password invalid" });
    }

    // Assigning the token
    const token = jwt.sign(
      { email: foundUser.email, id: foundUser._id },
      "Secret",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ theUser: foundUser, token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signin, signup };
