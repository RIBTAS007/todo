import React from "react";
import { Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";

import TodoHomePage from "../components/TodoHomePage";
import Error from "./Error";

export default function privateRoute() {
  return {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <TodoHomePage />, errorElement: <Error /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  };
}
