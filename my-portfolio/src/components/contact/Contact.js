import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

import "../contact/Contact.css";
import EarthCanvas from "../Earth";
function Contact() {
  return (
    <>
      <div className="footerContainer " id="contact">
        <MDBRow className="p-3">
          <MDBCol className="col-8 m-1 text-center col-md-3 col-lg-5">
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
          <MDBCol className=" col-10 m-1 text-center  col-md-5 col-lg-3">
            <MDBCol>
              <div>
                <form>
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
                <div></div>
              </div>
            </MDBCol>
          </MDBCol>{" "}
          <MDBCol className=" col-12 m-1 col-md-3 col-lg-3">
            {" "}
            <EarthCanvas />
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}

export default Contact;
