import DisplayTodos from "./DisplayTodos";
import React, { Fragment } from "react";
import "../css/main.css";
import { motion } from "framer-motion";
import Todos from "./Todos";
import { useAuth0 } from "@auth0/auth0-react";

// This Component will display the todo app upon successful authentication

function TodoHomePage() {
  const { isAuthenticated, logout, user, isLoading } = useAuth0();
  return (
    <Fragment>
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.button
        // onClick={(e) => props.onAuthentication(e)}
        className="btn"
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        Sign Out
      </motion.button>
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
