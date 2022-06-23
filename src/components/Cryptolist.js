/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cryptoitem from "./Cryptoitem";
import { useDispatch } from "react-redux";
import { cryptoApi, useGetCryptosQuery } from "../redux/cryptoApi";
import { Link } from "react-router-dom";
import "./Cryptolist.css";

const Cryptolist = () => {
  const dispatch = useDispatch();
  const { data: cryptodetaildata, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptodetaildata?.data?.coins);
  /*
  useEffect(() => {
    // Add a subscription
    const result = dispatch(useGetCryptosQuery().endpoints.getPost.initiate(postId))

    // Return the `unsubscribe` callback to be called in the `useEffect` cleanup step
    return result.unsubscribe
  }, [dispatch, postId])
 
  useEffect(() => {
    cryptodetaildata();
  });
  
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": "0e23dfd609mshd4ac7e0b2521576p13a5adjsn09d2b8c5d60c",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);*/

  if (isFetching) return "Loading...";

  console.log(cryptos, "cryptos");

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
