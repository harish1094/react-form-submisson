import React from "react";
import { Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <Row>
        <Header />
        <Outlet />
      </Row>
    </div>
  );
};

export default Layout;
