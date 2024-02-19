import React from "react";
import AuthWrapper from "./page/AuthWrapper.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import privateRoute from "./page/PrivateRoute.js";
import publicRoute from "./page/PublicRoute.js";

function App() {
  const { isAuthenticated, user } = useAuth0();

  const isUser = isAuthenticated && user;
  // const isUser = false;
  const router = createBrowserRouter([
    isUser ? privateRoute() : {},
    ...publicRoute(),
  ]);
  return (
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  );
}

export default App;
