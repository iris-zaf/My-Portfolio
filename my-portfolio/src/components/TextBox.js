import React from "react";
import Pdf from "../components/Iris_CV1.pdf";
import { motion } from "framer-motion";
import "../homepage/Homepage.css";
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
          technologies. While attending an intensive coding bootcamp I am
          proficient in MERN Stack.
        </p>
        <br></br> <div className="wrapper"></div>
        <div style={{ textAlign: "center" }}>
          {" "}
          <a href={Pdf} target="_blank" className="button outline">
            CHECK MY CV
          </a>
        </div>
      </div>
    </>
  );
}

export default TextBox;
