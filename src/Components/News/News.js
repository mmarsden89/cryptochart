import "./News.scss";

const News = (props) => {
  const { url, imageurl, title, source } = props.data;
  const { all } = props;
  return (
    <a href={url} target="_blank" className="news-item-container" title={title}>
      <img src={imageurl} className="news-image" />
      <p className="news-title">{title.replace(/^(.{75}[^\s]*).*/, "$1...")}</p>
      {all ? <p className="source">({source})</p> : null}
    </a>
  );
};

export default News;
