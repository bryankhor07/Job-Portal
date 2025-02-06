import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>>
      <Outlet /> {/* This is where the child routes will be rendered */}
    </div>
  );
};

export default AppLayout;
