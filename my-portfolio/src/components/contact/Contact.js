import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

import "../contact/Contact.css";
function Contact() {
  return (
    <>
      <div className="footerContainer " id="contact">
        <MDBRow>
          <MDBCol className="m-5 ">
            <ul>
              <li>
                <a
                  href=" https://www.linkedin.com/in/iris-kalogirou"
                  target="_blank"
                  class="fab fa-linkedin fa-beat m-2"
                  style={{ color: "black" }}
                >
                  {" "}
                </a>{" "}
                Iris Kalogirou
              </li>
              <li>
                <a
                  href="https://github.com/iris-zaf"
                  target="_blank"
                  class="fab fa-github fa-beat m-2"
                  style={{ color: "black" }}
                >
                  {" "}
                </a>{" "}
                iris-zaf
              </li>
            </ul>
          </MDBCol>

          <MDBCol className="m-5">
            <div>
              <form className="   pb-4 ">
                <div></div>
                <a
                  href="mailto:iriri2313@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="button contactBtn"
                  value="connect"
                >
                  {" "}
                  <span>Let's connect</span>🔗
                </a>
              </form>{" "}
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}

export default Contact;
