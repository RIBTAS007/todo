import React from "react";
import { motion } from "framer-motion";
import "../css/main.css";

const Button = ({ onClick, name }) => {
  return (
    <div className="normalButton">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
      >
        {name}
      </motion.button>
    </div>
  );
};

export default Button;
