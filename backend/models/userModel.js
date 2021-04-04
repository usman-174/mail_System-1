const mongoose = require("mongoose")
const schema = mongoose.Schema

const userSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    
  },
  googleId: {
    type: String,
    required: false,
  },
  origin: {
    type: String,
    required: true,
    default: "local",
  },
  password: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: false,
  },
})
const User = mongoose.model("User", userSchema)
module.exports = User
