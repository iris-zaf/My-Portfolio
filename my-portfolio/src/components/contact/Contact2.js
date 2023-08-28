import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../../styles";
// import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
function Contact2() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // handleChange logic
  const handleChange = (e) => {};

  // handleSubmit logic
  const handleSubmit = (e) => {};

  return (
    <div
      className="flex flex-row flex-col-reverse
   gap-10 overflow-hidden
  "
    >
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}></motion.div>
    </div>
  );
}

export default Contact2;
// text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]
