const mongoose = require("mongoose");
const schema = mongoose.Schema;

const mailSchema = new schema(
  {
    name: {
      type: String,
      required: true,
      default: "No message",
    },
    message: {
      type: String,
      required: true,
      default: "No Name",
    },
    userId: { type: mongoose.Types.ObjectId },
    mails: [],
  },
  { timestamps: true }
);
const Mail = mongoose.model("Mail", mailSchema);
module.exports = Mail;
