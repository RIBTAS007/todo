import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";

// This component will do the Google authentication.

function TodoLoginPage() {
  return (
    <div className="login">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Sign in to get Started !
      </motion.h1>
      <Header />
    </div>
  );
}

export default TodoLoginPage;
