const express = require("express");
// const router = express.Router();
require("dotenv").config();
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const Port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`);
});

app.get("/", (req, res) => {
  sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});
