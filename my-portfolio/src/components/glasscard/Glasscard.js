import "../glasscard/Glasscard.css";
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
function GlassCard() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));
  const line1 = "Hey, I'm Iris.";
  const line2 = " I'm a Full Stack Developer";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,

      y: 5,
    },
  };

  return (
    <animated.div
      className="glass-card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    >
      <motion.div
        className="load-screen--message"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {line1.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <br />
        {line2.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        {/* <h1>Hey, I'm Iris.</h1>
        <p>
          {" "}
          I'm a{" "}
          <span
            style={{
              fontWeight: "700",
              fontSize: "25px",
              color: "rgb(125 62 62)",
            }}
          >
            Full Stack Developer
          </span>{" "}
        </p> */}
      </motion.div>
    </animated.div>
  );
}

export default GlassCard;
