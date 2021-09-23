import { Link } from "react-router-dom";
import { News } from "./index.js";
import "./News.scss";

const HomeNews = (props) => {
  const { news } = props;

  const { innerHeight } = window;

  const numberOfArticles = Math.round(innerHeight / 125);

  const newsHTML = news
    .slice(0, numberOfArticles)
    .map((newsItem) => (
      <News data={newsItem} id={newsItem.id} key={newsItem.id} />
    ));

  return (
    <div className="home-news-container">
      <div className="empty"></div>
      <div className="for-you">NEWS FOR YOU</div>
      <div className="news-container">
        {newsHTML}
        <Link to="/news">
          <div className="view-more">view more</div>
        </Link>
      </div>
    </div>
  );
};

export default HomeNews;
