import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loadingImage from "../img/loadingImage.gif";
function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <section className="authWrapper">
        <img src={loadingImage} alt="spinner" />
      </section>
    );
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return <>{children}</>;
}

// const Wrapper = styled.section`
//   min-height: 100vh;
//   display: grid;
//   place-items: center;
//   img {
//     width: 150px;
//   }
// `;

export default AuthWrapper;
