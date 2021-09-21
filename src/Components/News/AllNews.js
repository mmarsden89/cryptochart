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
      <p className="scroll-for-more">scroll for more</p>
      {news.slice(0, 50).map((newsItem) => (
        <News data={newsItem} key={newsItem.id} all={true} />
      ))}
    </div>
  );
};

export default AllNews;
