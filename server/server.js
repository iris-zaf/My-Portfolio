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
function sendEmail(props) {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "iriri2313@gmail.com",
        pass: "sgihbpvrrxmvfctu",
      },
    });
    const mail_configs = {
      from: "",
      to: "iriri2313@gmail.com",
      subject: "Iris Kalogirou",
      text: props.message,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `  An error has occured` });
      }
      return resolve({ message: `Email send successfully` });
    });
  });
}

app.get("/", (req, res) => {
  sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.post("/sendEmail", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});
