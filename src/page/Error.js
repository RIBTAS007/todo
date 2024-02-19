import React from "react";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>404</h1>
      <h3>Something went wrong 😢</h3>
      <h3>{error.data || error.message}</h3>
      <Link to="/" className="btn">
        {" "}
        Back Home
      </Link>
    </div>
  );
};
// const Wrapper = styled.section`
//   min-height: 100vh;
//   display: grid;
//   place-items: center;
//   background: var(--clr-primary-10);
//   text-align: center;
//   h1 {
//     font-size: 10rem;
//   }
//   h3 {
//     color: var(--clr-grey-3);
//     margin-bottom: 1.5rem;
//   }
// `;
export default Error;
