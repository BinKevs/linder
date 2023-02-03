import React, { useState } from "react";

import NavBar from "./NavBar";

import FooterPart from "./Footer";
const Layout = (props) => {
  return (
    <>
      <NavBar />

      <div className="font-Montserrat">
        {/* <Outlet /> */}
        {props.children}
      </div>
      <FooterPart />
    </>
  );
};

export default Layout;
