const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mailRoutes = require("./routes/mails.js");
const userRoutes = require("./routes/users.js");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies
app.use(cors());

app.use("/mails", mailRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });
