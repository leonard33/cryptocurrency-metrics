/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";
import { useGetCryptosDetailQuery } from "../redux/cryptoApi";
import "./Coindetails.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Coinsdetails = () => {
  const { coinid } = useParams();
  const { data: coindetail, isFetching } = useGetCryptosDetailQuery(coinid);
  // const [datastate, setDatastate] = useState(data?.data?.coins?);
  console.log(coindetail?.data?.coins, "my detail");
  console.log(coindetail?.data?.coins?.stats, "my stats");

  let coined = {};
  let statistics = {};
  if (isFetching) return "Loading...";

  coined = coindetail?.data?.coins?.filter((item) => {
    return item.uuid == coinid;
  });

  statistics = coindetail?.data?.coins?.stats?.filter((item) => {
    return item.uuid == coinid;
  });

  console.log(coined);
  console.log(statistics);

  return (
    <div className="details-container">
      <div className="top-container">
        <div className="icon-image">
          {<img src={coined[0].iconUrl} alt="coin" />}
        </div>
        <div className="name">{coined[0].name}</div>
      </div>
      <div className="metric">
        <p className="data">
          <span>Rank&nbsp;:</span>
          {coined[0].rank}
        </p>
        <p className="data">
          <span>Market Cap&nbsp;:</span>$ &nbsp;{millify(coined[0].marketCap)}
        </p>
        <p className="data">
          <span>Price:</span>$ &nbsp;{millify(coined[0].price)}
        </p>
        <p className="data">
          <span>Listed at&nbsp;:</span>$ &nbsp;{millify(coined[0].listedAt)}
        </p>
        <p className="data">
          <span>Change&nbsp;:</span>$ &nbsp;{coined[0].change}
        </p>
        <p className="data">
          <span>Btc Price&nbsp;:</span>$ &nbsp;{millify(coined[0].btcPrice)}
        </p>
        <button className="cryptolink">
          <a href={coined[0].coinrankingUrl}>
            Check Coin Ranking &nbsp; <AiOutlineArrowRight />{" "}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Coinsdetails;
