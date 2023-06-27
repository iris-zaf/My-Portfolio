import React, { useState } from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";

import "../contact/Contact.css";
function Contact() {
  const [recipient_email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function sendMail() {
    if (recipient_email && message) {
      axios
        .post("http://localhost:5000/sendEmail", {
          recipient_email,
          message,
        })
        .then(() => alert("Message send successfully"))
        .catch((error) => console.log(error));
      return;
    }
    return alert("Fill in all the fields to continue");
  }

  return (
    <>
      <div className="footerContainer " id="contact">
        <MDBRow>
          <MDBCol className="m-5">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i
                    class="fas fa-envelope fa-beat m-2"
                    style={{ color: "black" }}
                  ></i>
                </a>
                iriskalogirou1@gmail.com
              </li>
              <li>
                <a
                  href=" https://www.linkedin.com/in/iris-kalogirou"
                  target="_blank"
                  class="fab fa-linkedin fa-beat m-2"
                  style={{ color: "black" }}
                ></a>
                Iris Kalogirou
              </li>
              <li>
                <a
                  href="https://github.com/iris-zaf"
                  class="fab fa-github fa-beat m-2"
                  style={{ color: "black" }}
                ></a>
                iris-zaf
              </li>
            </ul>
          </MDBCol>

          <MDBCol className="m-5">
            <div>
              <form className=" p-4  pb-4 ">
                <div>
                  <label htmlFor="email">Email:</label>
                  <MDBInput
                    type="email"
                    wrapperClass="mb-4"
                    textarea
                    id="form4Example2"
                    rows={4}
                    onChange={(e) => setEmail(e.target.value)}
                  />{" "}
                  <label>Message:</label>
                  <MDBInput
                    wrapperClass="mb-4"
                    textarea
                    id="form4Example3"
                    rows={4}
                    onChange={(e) => setMessage(e.target.value)}
                  />{" "}
                </div>
                <MDBBtn
                  type="submit"
                  className="mb-4 "
                  block
                  style={{
                    background: " #ecd4d4",
                    color: "#000000e8",
                    fontWeight: "600",
                  }}
                  onClick={() => sendMail()}
                >
                  Get in Contact🤘
                </MDBBtn>
              </form>{" "}
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}

export default Contact;
