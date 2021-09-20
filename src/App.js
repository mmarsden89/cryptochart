import "./App.scss";
import Navbar from "./Components/Navbar/Navbar.js";
import CoinList from "./Components/CoinList/CoinList.js";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage.js";
import { Route, Switch } from "react-router-dom";
// import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
// import "frappe-charts/dist/frappe-charts.min.css";
import ChartWrapper from "./Components/Charts/ChartWrapper.js";
import HomeNews from "./Components/News/HomeNews.js";
import AllNews from "./Components/News/AllNews.js";
import React, { useState, useEffect } from "react";

function App() {
  const [news, setNews] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const defaultError = () => {
    setErrorMessage("");
  };

  const flipError = (message) => {
    setErrorMessage(message);
    setTimeout(defaultError, 4000);
  };

  return (
    <div className="App">
      <Navbar />
      {errorMessage.length > 0 && <ErrorMessage message={errorMessage} />}
      <div className="component-container">
        <Switch>
          <Route exact path="/">
            <ChartWrapper flipError={flipError} />
            <HomeNews />
          </Route>
          <Route exact path="/news">
            <AllNews />
          </Route>
          <Route exact path="/coinlist" component={CoinList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
