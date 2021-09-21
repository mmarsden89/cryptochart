import "./News.scss";

const News = (props) => {
  const {
    data: { url, imageurl, title, source },
    all,
  } = props;

  const regex = (/^(.{75}[^\s]*).*/, "$1...");

  return (
    <a href={url} target="_blank" className="news-item-container" title={title}>
      <img src={imageurl} className="news-image" />
      <p className="news-title">{title.replace(regex)}</p>
      {all ? <p className="source">({source})</p> : null}
    </a>
  );
};

export default News;
