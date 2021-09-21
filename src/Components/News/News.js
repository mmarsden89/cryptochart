import "./News.scss";

const News = (props) => {
  const { url, imageurl, title } = props.data;
  return (
    <a href={url} target="_blank" className="news-item-container" title={title}>
      <img src={imageurl} className="news-image" />
      <p className="news-title">{title.replace(/^(.{75}[^\s]*).*/, "$1...")}</p>
    </a>
  );
};

export default News;
