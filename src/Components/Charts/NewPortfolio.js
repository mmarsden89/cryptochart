import React, { useState, useEffect } from "react";
import { getAllCoins } from "./api/index.js";

const NewPortfolio = () => {
  const [newPort, setNewPort] = useState({});
  const [symbol, setSymbol] = useState("");
  const [allSymbols, setAllSymbols] = useState({});

  useEffect(() => {}, [newPort]);

  const handleChange = (e) => {
    console.log(e.target);
    const { value, name } = e.target;
    if (name) {
      setSymbol(value);
    }
  };

  useEffect(async () => {
    const api = await getAllCoins();
    const { Data } = api.data;
    setAllSymbols(Data);
    // setAllSymbols()
  }, [allSymbols]);

  return (
    <div>
      <input placeholder="token symbol" onChange={handleChange} name="symbol" />
      <input />
      <input />
    </div>
  );
};

export default NewPortfolio;
