const Mail = require("../models/mailModel");
const User = require("../models/userModel");

const allMails = async (req, res) => {
  const foundData = await Mail.find({});
  res.send(foundData);
};

const sendMail = async (req, res) => {
  const { email, from, info, text } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const send = await Mail.updateOne(
        { userId: existingUser._id },
        {
          $push: {
            mails: { $each: [{ name: text, from: "Awais", message: info }] },
          },
        }
      );
      return res.status(200).json({ message: "Letter sent successfully" });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { allMails, sendMail };
