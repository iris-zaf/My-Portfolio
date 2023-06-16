import { Parallax } from "react-parallax";

import Fluid from "../images/fluidArt.avif";
const ImageTwo = () => (
  <Parallax className="image" bgImage={Fluid} strength={800}>
    <div className="content">
      <span className="img-txt">Have a look at my projects below</span>
    </div>
  </Parallax>
);
export default ImageTwo;
