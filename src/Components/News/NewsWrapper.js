import React, { useState, useEffect } from "react";
import "./News.scss";
import axios from "axios";
import { AllNews, HomeNews } from "./index.js";

const NewsWrapper = () => {
  const [news, setNews] = useState([]);

  const apiCall = async () => {
    const newsCall = await axios(
      "https://min-api.cryptocompare.com/data/v2/news/?lang=EN"
    );
    setNews(newsCall.data.Data);
  };

  useEffect(() => {
    apiCall();
  }, []);

  const { hash } = window.location;

  return (
    <div className="news-wrapper">
      {hash.includes("news") ? (
        <AllNews news={news} />
      ) : (
        <HomeNews news={news} />
      )}
      ;
    </div>
  );
};

export default NewsWrapper;
