import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import Charts from "./Charts";
import ErrorMessage from "../ErrorMessage/ErrorMessage.js";

const ChartWrapper = (props) => {
  const [prices, setPrices] = useState([]);
  const [coinData, setCoinData] = useState([]);
  const [coin, setCoin] = useState("BTC");
  const [times, setTimes] = useState([]);
  const [timeline, setTimeline] = useState("1W");
  const [coinList, setCoinList] = useState(["BTC", "ETH", "ADA", "DOGE"]);
  const [newCoinBoolean, setNewCoinBoolean] = useState(false);
  const [symbol, setSymbol] = useState("");
  const [symbolList, setSymbolList] = useState([]);
  const [percentage, setPercentage] = useState(0);

  const timeConverter = (time) => {
    return dayjs(time * 1000).format("MMM DD");
  };

  const apiCall = async () => {
    const calls = {
      "1Y": `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=USD&limit=365`,
      "1M": `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=USD&limit=30`,
      "1W": `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${coin}&tsym=USD&limit=168`,
      "24H": `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${coin}&tsym=USD&limit=1440&aggregate=5`,
      "1H": `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${coin}&tsym=USD&limit=60`,
    };
    const whatever = await axios(calls[timeline]);

    const dataToSet = whatever.data.Data.Data;
    setCoinData(dataToSet);
    return dataToSet;
  };

  const updateCoin = (id) => {
    setCoin(id);
  };

  const setNewCoin = (event) => {
    const { id } = event.target;
    updateCoin(id);
  };

  const setNewTimeline = (event) => {
    const { id } = event.target;
    setTimeline(id);
  };

  const addNewButton = async () => {
    setNewCoinBoolean(true);
    const api = await axios(
      "https://min-api.cryptocompare.com/data/all/coinlist?summary=true"
    );
    setSymbolList(Object.keys(api.data.Data));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSymbol(value.toUpperCase());
    handleSymbolList(value.toUpperCase());
  };

  const handleSymbolList = (value) => {
    if (value.length > 0) {
      const updatedSymbolList = [...symbolList].filter((singleSymbol) => {
        return singleSymbol.startsWith(value);
      });
      setSymbolList(updatedSymbolList);
    } else {
      addNewButton();
    }
  };

  const handleNewCoin = (event) => {
    const { id } = event.target;
    const updatedList = [...coinList];
    if (updatedList.includes(id)) {
      props.flipError("Already added coin");
    } else {
      updatedList.push(id);
      setCoinList(updatedList);
      localStorage.setItem("coins", JSON.stringify(updatedList));
    }
  };

  const handleBlur = () => {
    const handleThings = () => {
      setNewCoinBoolean(false);
      setSymbol("");
    };
    setTimeout(handleThings, 500);
  };

  const inputHTML = (
    <div onBlur={handleBlur} className="input-container">
      <input
        className="new-coin-input"
        placeholder="SYMBOL"
        value={symbol}
        onChange={handleChange}
        type="text"
        autoFocus
      />
      <div className="coin-search-container">
        {symbol.length > 0 &&
          symbolList
            .sort()
            .slice(0, 10)
            .map((sym) => (
              <button
                className="coin-list-item"
                onClick={handleNewCoin}
                id={sym}
                key={sym}
              >
                {sym}
              </button>
            ))}
        <Link to="/coinlist">
          <button className="browse-all">browse all</button>
        </Link>
      </div>
    </div>
  );

  const newCoinHTML = (
    <button className="timeline-button" onClick={addNewButton}>
      {"< + / - >"}
    </button>
  );

  const buttonToInput = newCoinBoolean ? inputHTML : newCoinHTML;

  const checkOrUpdateStorage = (list) => {
    if (!localStorage.getItem("coins")) {
      localStorage.setItem("coins", JSON.stringify(coinList));
    } else {
      setCoinList(JSON.parse(localStorage.getItem("coins")));
    }
  };

  const chartButtonClassName = (coinButton) => {
    let className = "timeline-button";
    if (newCoinBoolean) {
      className = className.concat(" remove-button");
    } else if (coin === coinButton) {
      className = className.concat(" active-timeline");
    }
    return className;
  };

  const deleteCoin = (event) => {
    const { id } = event.target;
    const updatedList = [...coinList];
    const index = coinList.indexOf(id);
    updatedList.splice(index, 1);
    setCoinList(updatedList);
    localStorage.setItem("coins", JSON.stringify(updatedList));
  };

  useEffect(async () => {
    checkOrUpdateStorage();
    const stuff = await apiCall();
    setTimes(stuff.map((single) => timeConverter(single.time)));
    setPrices(stuff.map((single) => single.close));
    setPercentage(
      Math.round(
        ((stuff[stuff.length - 1].close - stuff[0].close) / stuff[0].close) *
          100 *
          100
      ) / 100
    );
  }, [timeline, coin]);

  return (
    <div
      style={{
        width: "950px",
        height: "450px",
        backgroundColor: "white",
        border: "1px solid #d1cece",
        // positon: "relative",
      }}
    >
      <div className="chart-header-container">
        <div className="current-price">
          <div style={{ display: "flex" }}>
            <div className="coin-chart-header">{coin}</div>
            <div
              className={
                percentage > 0 ? "percentage positive" : "percentage negative"
              }
            >
              {percentage}%
            </div>
          </div>
          <div className="price-header">Current Price:</div>
          <div className="price-action">
            $
            {coinData[1] &&
              coinData[coinData.length - 1].close.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
          </div>
        </div>
        <div className="coin-button-container">
          {coinList.map((coinButton) => (
            <button
              onClick={newCoinBoolean ? deleteCoin : setNewCoin}
              id={coinButton}
              className={chartButtonClassName(coinButton)}
            >
              {coinButton}
            </button>
          ))}
          {buttonToInput}
        </div>

        <div className="button-container">
          <button
            onClick={setNewTimeline}
            id="1H"
            className={
              timeline === "1H"
                ? "timeline-button active-timeline"
                : "timeline-button"
            }
          >
            1H
          </button>
          <button
            onClick={setNewTimeline}
            id="24H"
            className={
              timeline === "24H"
                ? "timeline-button active-timeline"
                : "timeline-button"
            }
          >
            24H
          </button>
          <button
            onClick={setNewTimeline}
            id="1W"
            className={
              timeline === "1W"
                ? "timeline-button active-timeline"
                : "timeline-button"
            }
          >
            1W
          </button>
          <button
            onClick={setNewTimeline}
            id="1M"
            className={
              timeline === "1M"
                ? "timeline-button active-timeline"
                : "timeline-button"
            }
          >
            1M
          </button>
          <button
            onClick={setNewTimeline}
            id="1Y"
            className={
              timeline === "1Y"
                ? "timeline-button active-timeline"
                : "timeline-button"
            }
          >
            1Y
          </button>
        </div>
      </div>
      <Charts times={times} prices={prices} coinData={coinData} />
    </div>
  );
};

export default ChartWrapper;
