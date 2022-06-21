/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Cryptoitem from "./Cryptoitem";
import { useGetCryptosQuery } from "../redux/cryptoApi";
import { Link } from "react-router-dom";
import "./Cryptolist.css";

const Cryptolist = () => {
  const { data: cryptocoin, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptocoin?.data?.coins);
  console.log(cryptos);

  if (isFetching) return "Loading...";

  return (
    <div className="cryptolist">
      {cryptos?.map((coin) => {
        return (
          <Link
            className="link"
            key={coin.uuid}
            to={`/cryptocoin/${coin.uuid}`}
          >
            <Cryptoitem
              key={coin.uuid}
              icon={<img src={coin.iconUrl} alt="coin" />}
              symbol={coin.symbol}
              name={coin.name}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Cryptolist;
