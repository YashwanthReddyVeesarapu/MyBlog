import React from "react";
import Header from "../components/Header/Header";
import "./styles.scss";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default MainLayout;
