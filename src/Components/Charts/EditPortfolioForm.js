import React, { useState, useEffect } from "react";
import { getAllCoins } from "./api/index.js";

const EditPortfolioForm = () => {
  const [newPort, setNewPort] = useState({});
  //   const [symbol, setSymbol] = useState("");
  const [allSymbols, setAllSymbols] = useState([]);
  const [symbolReturn, setSymbolReturn] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [values, setValues] = useState({});

  //   const { Symbol } = values.symbol;

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
    if (name === "symbol") {
      setSearchInput(value.toUpperCase());
      handleSymbolSearch(value.toUpperCase());
    } else {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleClick = (e) => {
    const { id } = e.target;
    setValues((prev) => ({
      ...prev,
      symbol: allSymbols[id],
    }));
    // setSymbol(allSymbols[id]);
    setSearchInput(id);
    setSymbolReturn([]);
  };

  const handleSubmit = (e) => {
    console.log(values);
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
          required
        />
        <ul>
          {symbolReturn.map((key) => (
            <li
              style={{ color: "white", listStyleType: "none" }}
              onClick={handleClick}
              id={key}
              key={key}
            >
              {key}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          placeholder="amount (# coins)"
          type="number"
          name="amount"
          onChange={handleChange}
          required
        />
        <p style={{ color: "white" }}>
          {values.symbol ? values.symbol.Symbol : null}
        </p>
      </div>
      <div>
        <input
          placeholder="cost average"
          type="number"
          name="average"
          onChange={handleChange}
          required
        />
      </div>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default EditPortfolioForm;
