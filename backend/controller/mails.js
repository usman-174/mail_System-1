const Mail = require("../models/mailModel")
const User = require("../models/userModel")

const getSendMails = async (req, res) => {
  const foundData = await Mail.find({
    from: req.user._id,
  }).populate("from")
  if (!foundData || !foundData.length) {
    return res.json({ msg: "No mails found" })
  }else {
    foundData.forEach(mail => {
      mail.from.password = undefined
    });
    return res.json(foundData)
  }
}

const sendMail = async (req, res) => {
  const { email, to: toEmail, message, text } = req.body
  console.log({ email, to: toEmail, message, text })
  if (req.user.email !== email) {
    return res.json({
      error: "Please logout and Login again to try sending mail",
    })
  }
  try {
    const from = await User.findOne({ email })
    const to = await User.findOne({ email: toEmail })

    if (from && to) {
      const mail = new Mail({
        message,
        text,
        to,
        from,
      })
      const savedMail = await mail.save()
      if (savedMail) {
        from.sentMails.push(savedMail)
        const savedUser = await from.save()
        if (savedUser) {
          mail.from.password = undefined
          mail.to.password = undefined
          return res
            .status(200)
            .json( mail )
        }
      }

      return res.json({ err: "Mail Failed" })
    } else {
      return res.status(404).json({ error: "User not found" })
    }
  } catch (error) {
    res.send(error.message)
  }
}
const singleMail = async (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.json({ error: "Invalid Route" })
  }
  try {
    const mail = await Mail.findById(id).populate("from to")
    if (!mail) {
      throw new Error("Post not found")
    }
    mail.from.password = undefined
    mail.to.password = undefined
    return res.json({ mail })
  } catch (error) {
    return res.json({ error: error.message })
  }
}
module.exports = { getSendMails, sendMail, singleMail }
