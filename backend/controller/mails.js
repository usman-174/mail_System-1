const Mail = require("../models/mailModel");
const User = require("../models/userModel");

// Get all sent mails
const getSentMails = async (req, res) => {
  let count = 0;
  let persons = [];
  const foundData = await Mail.find({
    from: req.user._id,
  }).populate("from");
  if (!foundData || !foundData.length) {
    return res.json({ msg: "No mails found" });
  } else {
    foundData.forEach((mail) => {
      mail.from.password = undefined;
      User.findById({ _id: mail.to }, (err, doc) => {
        ++count;
        persons.push(doc.name);

        if (count == foundData.length) {
          return res.json({ foundData, persons });
        }
      });
    });
  }
};

// Get all inbox mails
const getInboxMails = async (req, res) => {
  let count = 0;
  let persons = [];
  const foundData = await Mail.find({
    to: req.user._id,
  }).populate("to");
  if (!foundData || !foundData.length) {
    return res.json({ msg: "No mails found" });
  } else {
    foundData.forEach((mail) => {
      mail.from.password = undefined;
      User.findById({ _id: mail.from }, (err, doc) => {
        ++count;
        persons.push(doc.name);

        if (count == foundData.length) {
          return res.json({ foundData, persons });
        }
      });
    });
  }
};

// Compose the mail
const sendMail = async (req, res) => {
  const { from: sender, email: reciever, info: message, text } = req.body;
  console.log({ from: sender, email: reciever, message, text });
  if (req.user.email !== sender) {
    return res.status(400).json({
      error: "Please logout and Login again to try sending mail",
    });
  }
  try {
    console.log(sender, reciever);

    const from = await User.findOne({ email: sender });
    const to = await User.findOne({ email: reciever });

    if (from && to) {
      const mail = new Mail({
        message,
        text,
        to,
        from,
      });
      const savedMail = await mail.save();
      if (savedMail) {
        from.sentMails.push(savedMail);
        const savedUser = await from.save();
        if (savedUser) {
          mail.from.password = undefined;
          mail.to.password = undefined;
          return res.status(200).json({ message: "Letter send successfully" });
        }
      }

      return res.json({ err: "Mail Failed" });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.send(error.message);
  }
};

// Grab the single mail with ID
const singleMail = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.json({ error: "Invalid Route" });
  }
  try {
    const mail = await Mail.findById(id).populate("from to");
    if (!mail) {
      throw new Error("Post not found");
    }
    mail.from.password = undefined;
    mail.to.password = undefined;
    return res.json({ mail });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

module.exports = { getSentMails, sendMail, getInboxMails, singleMail };
