import { Parallax } from "react-parallax";
import React, { useState } from "react";
import GlassCard from "../components/glasscard/Glasscard";
import "../homepage/Homepage.css";
import Flower from "../components/flower.png";
import { Twirl as Hamburger } from "hamburger-react";
const ImageOne = () => {
  const [toggle, onToggle] = useState(false);
  return (
    <Parallax className="image" strength={800}>
      <div className="navContainer">
        <img
          src={Flower}
          alt="flower"
          style={{
            width: "6em",
            backgroundColor: "white",
            borderRadius: "6em",
          }}
        />{" "}
        <Hamburger
          size={30}
          duration={0.8}
          color=" #da9797"
          onToggle={(toggled) => {
            if (toggled) {
              <ul id="navbar">
                <li>About Me/My CV</li>
                <li>My Projects</li>
                <li>Contact Me</li>
              </ul>;
            } else {
              toggle = !toggle;
            }
          }}
          className="toggleBtn"
        >
          <div class="center">
            <div></div>
          </div>
        </Hamburger>
      </div>
      <div className="glassCardCont">
        <GlassCard />
      </div>
    </Parallax>
  );
};
export default ImageOne;
