import React, { useState, useEffect } from "react";
import News from "./News.js";
import axios from "axios";
import "./News.scss";
import { Link } from "react-router-dom";

const AllNews = () => {
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

  return (
    <div className="all-news-container">
      {news.slice(0, 20).map((newsItem) => (
        <News data={newsItem} key={newsItem.id} />
      ))}
    </div>
  );
};

export default AllNews;
