import React, { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";

// This component will do the Google authentication.

function TodoLoginPage() {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  // const [user, setUser] = useState({});

  // function handleCallbackResponse(response) {
  //   //console.log("Encoded JWT ID token:" + response.credential);
  //   var userObject = jwt_decode(response.credential);
  //   //console.log(userObject);
  //   setUser(userObject);
  //   document.getElementById("signInDiv").hidden = true;
  // }

  // function handleSignOut(event) {
  //   setUser({});
  //   document.getElementById("signInDiv").hidden = false;
  // }

  // useEffect(() => {
  //   /* global google*/
  //   google.accounts.id.initialize({
  //     client_id:
  //       "622863485553-0dci5p14do90c9qb3t1tno8amv6o3fgn.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });

  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  //   google.accounts.id.prompt();
  // }, []);
  return (
    <Fragment>
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Sign in to get Started !
      </motion.h1>

      <button onClick={loginWithRedirect}>Sign In</button>
    </Fragment>
  );
}

export default TodoLoginPage;
