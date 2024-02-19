import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import loadingImage from "../img/loadingImage.gif";

const AppLayout = () => {
  return (
    <>
      <Suspense
        fallback={
          <img src={loadingImage} className="loading-img" alt="loading" />
        }
      ></Suspense>
      <Outlet />
    </>
  );
};

export default AppLayout;
