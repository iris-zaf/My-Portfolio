import { Parallax } from "react-parallax";
import GlassCard from "../components/glasscard/Glasscard";

import Flower from "../components/flower.png";
const ImageOne = () => (
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
      />
      <div>
        <ul id="navbar">
          <li>About Me</li>
          <li>My Projects</li>
          <li>Contact Me</li>
        </ul>
      </div>{" "}
    </div>{" "}
    <div className="glassCardCont">
      <GlassCard />
    </div>
  </Parallax>
);
export default ImageOne;
