import React, { useState } from "react";
import { MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import axios from "axios";

import "../contact/Contact.css";
function Contact() {
  const [recipient_email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendMail(e) {
    if (recipient_email && message) {
      axios
        .post("http://localhost:5000/sendEmail", {
          recipient_email,
          message,
        })
        .then(alert("Message send successfully"))
        .catch((error) => console.log(error));
      return;
    }

    return alert("Fill in all the fields to continue");
  }

  return (
    <>
      <div className="footerContainer " id="contact">
        <MDBRow>
          <MDBCol className="m-5 ">
            <ul>
              <li>
                <div>
                  Location:
                  <div className="locationText">Athens, Greece</div>
                </div>
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
              <form className="   pb-4 ">
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

                <button
                  type="submit"
                  className="button contactBtn"
                  block
                  // style={{
                  //   background: "rgb(70,64,64)",
                  //   color: "white",
                  //   fontWeight: "500",
                  // }}
                  onClick={() => sendMail()}
                >
                  Let's connect🔗
                </button>
              </form>{" "}
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}

export default Contact;
