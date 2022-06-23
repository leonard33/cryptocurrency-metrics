import React from "react";
import Cryptoitem from "./Cryptoitem";
import { useGetCryptosQuery } from "../redux/cryptoApi";
import { Link } from "react-router-dom";
import "./Cryptolist.css";

const Cryptolist = () => {
  const { data: cryptodetaildata, isFetching } = useGetCryptosQuery();

  const cryptos = cryptodetaildata?.data?.coins;

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
              market={coin.marketCap}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Cryptolist;
