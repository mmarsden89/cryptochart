import React, { useState, useEffect } from "react";
import {
  TimelineButtons,
  CoinInput,
  CoinButtons,
  CurrentPrice,
  Chart,
} from "./Components/index.js";
import { getCoinData, getAllCoins } from "./api/index.js";

const ChartWrapper = (props) => {
  const { flipError } = props;

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
    getAllCoins(setSymbolList);
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
      flipError("Already added coin");
    } else if (updatedList.length > 8) {
      flipError("Too many coins. Please consider deleting unneeded ones");
    } else {
      updatedList.push(id);
      setCoinList(updatedList);
      localStorage.setItem("coins", JSON.stringify(updatedList));
    }
  };

  const handleBlur = () => {
    const handleState = () => {
      setNewCoinBoolean(false);
      setSymbol("");
    };
    setTimeout(handleState, 500);
  };

  const newCoinHTML = (
    <button className="timeline-button" onClick={addNewButton}>
      {"< + / - >"}
    </button>
  );

  const buttonOrInput = newCoinBoolean ? (
    <CoinInput
      state={{ symbol, symbolList }}
      functions={{ handleChange, handleNewCoin, handleBlur }}
    />
  ) : (
    newCoinHTML
  );

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
    const api = await getCoinData(
      coin,
      timeline,
      setCoinData,
      setTimes,
      setPrices,
      setPercentage
    );
  }, [timeline, coin]);

  return (
    <div className="chart-wrapper-container">
      <div className="chart-header-container">
        {coinData.length && (
          <CurrentPrice state={{ percentage, coinData, coin }} />
        )}
        <CoinButtons
          functions={{ deleteCoin, setNewCoin, chartButtonClassName }}
          state={{ coinList, newCoinBoolean }}
          html={{ buttonOrInput }}
        />
        <div className="button-container">
          {<TimelineButtons onClick={setNewTimeline} timeline={timeline} />}
        </div>
      </div>
      <Chart times={times} prices={prices} coinData={coinData} />
    </div>
  );
};

export default ChartWrapper;
