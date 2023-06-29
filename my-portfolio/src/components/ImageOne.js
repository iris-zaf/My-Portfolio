import React, { useState } from "react";
import { Parallax } from "react-parallax";
// import Pdf from "../components/Iris_CV.pdf";
import { HashLink } from "react-router-hash-link";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";
import GlassCard from "../components/glasscard/Glasscard";
import Zoom from "react-reveal/Zoom";
import "../homepage/Homepage.css";
import Flower from "../components/flower.png";
const ImageOne = () => {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="dark" id="navbar">
        <MDBContainer fluid>
          <Zoom>
            <MDBNavbarBrand href="#">
              {" "}
              <img
                src={Flower}
                alt="flower"
                style={{
                  width: "4em",
                  backgroundColor: "white",
                  borderRadius: "6em",
                  margin: "1em",
                }}
              />{" "}
            </MDBNavbarBrand>
          </Zoom>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0 navContainer">
              <MDBNavbarItem className="active">
                <HashLink aria-current="page" to="/#about">
                  About Me
                </HashLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <HashLink smooth to="/#content">
                  My Projects
                </HashLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <HashLink to="/#contact">Contact Me</HashLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                {/* <div className="wrapper"></div>
                <a href={Pdf} target="_blank" className="button outline">
                  My CV
                </a> */}
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <Parallax className="image" strength={800}>
        <div className="glassCardCont">
          <GlassCard />
        </div>
      </Parallax>
    </>
  );
};
export default ImageOne;
