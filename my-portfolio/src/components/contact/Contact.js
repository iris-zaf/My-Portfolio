import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../contact/Contact.css";
function Contact() {
  return (
    <>
      <div className="footerContainer ">
        <MDBRow>
          <MDBCol className="m-5">
            <h5 className="m-5">CONTACT ME</h5>
            <ul>
              <li>
                <a href="#" target="_blank">
                  <i class="fas fa-envelope fa-beat m-2"></i>
                </a>
                iriskalogirou1@gmail.com
              </li>
              <li>
                <a
                  href=" https://www.linkedin.com/in/iris-kalogirou"
                  target="_blank"
                  class="fab fa-linkedin fa-beat m-2"
                ></a>
                Iris Kalogirou
              </li>
              <li>
                <a
                  href="https://github.com/iris-zaf"
                  class="fab fa-github fa-beat m-2"
                ></a>
                iris-zaf
              </li>
            </ul>
          </MDBCol>

          <MDBCol className="m-5">
            <form className=" p-4  pb-4 ">
              <div>
                <label>Name</label>
                <MDBInput id="form4Example1" wrapperClass="mb-4" />
              </div>
              <div>
                <label>Email</label>
                <MDBInput type="email" id="form4Example2" wrapperClass="mb-4" />
              </div>
              <div>
                <label>Message:</label>
                <MDBInput
                  wrapperClass="mb-4"
                  textarea
                  id="form4Example3"
                  rows={4}
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
              >
                Get in Contact🤘
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}

export default Contact;
