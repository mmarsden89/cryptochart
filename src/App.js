import "./App.scss";
import Navbar from "./Components/Navbar/Navbar.js";
import CoinList from "./Components/CoinList/CoinList.js";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage.js";
import { Route, Switch } from "react-router-dom";
// import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
// import "frappe-charts/dist/frappe-charts.min.css";
import ChartWrapper from "./Components/Charts/ChartWrapper.js";
import axios from "axios";
import React, { useState, useEffect } from "react";
import News from "./Components/News.js";
import { Link } from "react-router-dom";

function App() {
  const [news, setNews] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const apiCall = async () => {
    const newsCall = await axios(
      "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
    );
    setNews(newsCall.data.Data);
  };

  useEffect(() => {
    apiCall();
  }, []);

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
            <div className="news-parent-container">
              <div className="for-you">NEWS FOR YOU</div>
              <div className="news-container">
                {news.slice(0, 4).map((newsItem) => (
                  <News data={newsItem} id={newsItem.id} />
                ))}
                <Link to="/news">
                  <div className="view-more">view more</div>
                </Link>
              </div>
            </div>
          </Route>
          <Route exact path="/news">
            <div className="news-container2">
              {news.slice(0, 20).map((newsItem) => (
                <News data={newsItem} key={newsItem.id} />
              ))}
            </div>
          </Route>
          <Route exact path="/coinlist" component={CoinList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
