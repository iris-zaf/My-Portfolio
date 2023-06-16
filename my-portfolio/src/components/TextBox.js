import React from "react";
import Arrow from "../components/down-arrow.png";
function TextBox() {
  return (
    <>
      <div className="text-box">
        <h3>Welcome To My World</h3>
        <p className="intro">
          I am a Full Stack Web Developer with a passion for learning new
          technologies. While attending an intensive seven month bootcamp I
          worked with a variety of technologies.{" "}
          <img src={Arrow} alt="arrow" style={{ width: "2em" }} />
        </p>
      </div>
    </>
  );
}

export default TextBox;
