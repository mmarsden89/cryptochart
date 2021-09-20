import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CoinList.scss";

const CoinList = () => {
  const [coinList, setCoinList] = useState([]);

  const callAPI = async () => {
    const api = await axios(
      "https://min-api.cryptocompare.com/data/all/coinlist"
    );
    setCoinList(
      Object.values(api.data.Data).sort((a, b) => a.SortOrder - b.SortOrder)
    );
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="coin-list-container">
      {Object.keys(coinList)
        .sort()
        .map((coin) => (
          <p className="individual-coin">{coinList[coin].Name}</p>
        ))}
    </div>
  );
};

export default CoinList;
