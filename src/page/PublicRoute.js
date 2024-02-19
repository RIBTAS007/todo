import React from "react";

import { Navigate } from "react-router-dom";
import TodoLoginPage from "../components/TodoLoginPage";

export default function publicRoute() {
  return [
    { path: "/login", element: <TodoLoginPage /> },
    { path: "*", element: <Navigate to="/login" replace /> },
  ];
}
