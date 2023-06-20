const express = require("express");

const router = express.Router();
const nodemailer = require("nodemailer");

function sendEmail(props) {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "iriri2313@gmail.com",
        pass: "qmcvvfqvdphniisy",
      },
    });

    const mail_configs = {
      from: "",
      to: props.recipient_email,

      text: "Thank you for subscribing! You will get the latest news about new charities and ways to donate!",
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
router.get("/", (req, res) => {
  sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

router.post("/send_email", (req, res) => {
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

module.exports = router;
