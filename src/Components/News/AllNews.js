import { News } from "./index.js";
import "./News.scss";

const AllNews = (props) => {
  const { news } = props;

  const newsHTML = news
    .slice(0, 50)
    .map((newsItem) => <News data={newsItem} key={newsItem.id} all />);

  return (
    <div className="all-news-container">
      <p className="scroll-for-more">scroll for more</p>
      {newsHTML}
    </div>
  );
};

export default AllNews;
