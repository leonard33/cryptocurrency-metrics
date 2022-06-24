import React from "react";
import cryptologo from "../assets/crypt.png";
import { AiOutlineLeft } from "react-icons/ai";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="back">
        <Link to={"/"}>
          <AiOutlineLeft color="white" fontWeight={900} />
        </Link>
      </div>
      <div className="logo">
        <img src={cryptologo} width="70" height="50" />
      </div>
      <div className="logo-name">
        <h1>ryptometrics</h1>
      </div>
    </div>
  );
};

export default Nav;
