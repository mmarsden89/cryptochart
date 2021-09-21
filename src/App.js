import "./App.scss";
import Navbar from "./Components/Navbar/Navbar.js";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage.js";
import { Route, Switch } from "react-router-dom";
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
        </Switch>
      </div>
    </div>
  );
}

export default App;
