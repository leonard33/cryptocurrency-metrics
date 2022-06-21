import React from "react";
import PropTypes from "prop-types";
// import cryptologo from "../assets/cryptologo.jpg";
import "./Coinitem.css";

const Cryptoitem = ({ icon, symbol, name }) => {
  return (
    <div className="cryptoitem-container">
      <div className="icon-container">
        <div className="icon">{icon}</div>
        <div className="symbol">{symbol}</div>
      </div>
      <div className="coin-name">{name}</div>
    </div>
  );
};

Cryptoitem.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Cryptoitem;
