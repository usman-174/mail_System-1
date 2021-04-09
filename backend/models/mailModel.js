const mongoose = require("mongoose");
const schema = mongoose.Schema;

const mailSchema = new schema(
  {
    
    message: {
      type: String,
      required: true,
    
    },
    text: {
      type: String,
      required: true,
  
    },
    to :{type: mongoose.Schema.Types.ObjectId ,ref : 'User',required:true},
    from: { type: mongoose.Schema.Types.ObjectId ,ref : 'User',required:true},
    
  },
  { timestamps: true }
);
const Mail = mongoose.model("Mail", mailSchema);
module.exports = Mail;
