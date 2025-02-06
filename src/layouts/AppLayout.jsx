import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      AppLayout
      <Outlet /> {/* This is where the child routes will be rendered */}
    </div>
  );
};

export default AppLayout;
