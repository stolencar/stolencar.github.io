import { motion } from "framer-motion";

function Btn({ src, title, onclick }) {
  return (
    <motion.img
      src={src}
      title={title}
      whileHover={{ transform: "rotate(360deg)" }}
      transition={{ duration: 1.3, type: "spring" }}
      onClick={onclick}
    />
  );
}

export default Btn;
