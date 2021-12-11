import React, { useState, useEffect } from "react";
import { getAllCoins } from "./api/index.js";

const NewPortfolio = () => {
  const [newPort, setNewPort] = useState({});
  const [symbol, setSymbol] = useState("");
  const [allSymbols, setAllSymbols] = useState([]);
  const [symbolReturn, setSymbolReturn] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSymbolSearch = (val) => {
    if (val.length < 1) {
      setSymbolReturn([]);
      return;
    }
    const keys = Object.keys(allSymbols);
    const searchReturn = keys.filter((sym) => {
      return sym.startsWith(val);
    });
    setSymbolReturn(searchReturn.sort().slice(0, 5));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name) {
      setSearchInput(value.toUpperCase());
      handleSymbolSearch(value.toUpperCase());
    }
  };

  const handleClick = (e) => {
    const { id } = e.target;
    setSymbol(allSymbols[id]);
    setSearchInput(id);
    setSymbolReturn([]);
  };

  useEffect(async () => {
    const api = await getAllCoins();
    const { Data } = api.data;
    setAllSymbols(Data);
  }, [newPort, searchInput, symbolReturn]);

  return (
    <div>
      <div>
        <input
          placeholder="token symbol"
          onChange={handleChange}
          name="symbol"
          value={searchInput}
        />
        <ul>
          {symbolReturn.map((key) => (
            <li
              style={{ color: "white", listStyleType: "none" }}
              onClick={handleClick}
              id={key}
            >
              {key}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input placeholder="amount (# coins)" type="number" />
        <p style={{ color: "white" }}>{symbol.Symbol}</p>
      </div>
      <div>
        <input placeholder="cost average" type="number" />
      </div>
      <button>submit</button>
    </div>
  );
};

export default NewPortfolio;
