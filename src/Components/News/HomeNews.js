import React, { useState, useEffect } from "react";
import News from "./News.js";
import "./News.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeNews = () => {
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
    <div className="news-parent-container">
      <div style={{ height: "15%" }}></div>
      <div className="for-you">NEWS FOR YOU</div>
      <div className="news-container">
        {news.slice(0, 5).map((newsItem) => (
          <News data={newsItem} id={newsItem.id} />
        ))}
        <Link to="/news">
          <div className="view-more">view more</div>
        </Link>
      </div>
    </div>
  );
};

export default HomeNews;
