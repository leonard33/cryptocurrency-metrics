import React from "react";
import cryptologo from "../assets/cryptologo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={cryptologo} width="50" height="50" />
      </div>
      <div className="logo-name">
        <h1>Cryptometrics</h1>
      </div>
    </div>
  );
};

export default Nav;
