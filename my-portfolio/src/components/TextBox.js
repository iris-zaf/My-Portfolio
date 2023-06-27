import React from "react";
import Arrow from "../components/down-arrow.png";
import { motion } from "framer-motion";
function TextBox() {
  return (
    <>
      <div className="text-box" id="about">
        <motion.h3
          animate={{ x: [15, 20, 15], opacity: 1, scale: 0.8 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >
          Welcome To My World
        </motion.h3>
        <p className="intro">
          I am a Full Stack Web Developer with a passion for learning new
          technologies. While attending an intensive seven month bootcamp I
          worked with the MERN Stack technologies, creating multiple projects.{" "}
          <img src={Arrow} alt="arrow" style={{ width: "2em" }} />
        </p>
      </div>
    </>
  );
}

export default TextBox;
