import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { logout, isAuthenticated, user, loginWithRedirect } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <div className="header">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.h5>
        Made by{" "}
        <a href="https://www.linkedin.com/in/satbir007/">Satbir Singh 🚀</a>
      </motion.h5>
      {isUser ? (
        <Button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
          name={"Log Out"}
        />
      ) : (
        <Button onClick={loginWithRedirect} name={"Log In"} />
      )}
    </div>
  );
};

export default Header;
