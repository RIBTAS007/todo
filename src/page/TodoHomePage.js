import DisplayTodos from "../components/DisplayTodos";
import React, { Fragment } from "react";
import "../css/main.css";
import { motion } from "framer-motion";
import Todos from "../components/Todos";
import Header from "../components/Header";

function TodoHomePage() {
  return (
    <Fragment>
      <Header />
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </Fragment>
  );
}

export default TodoHomePage;
