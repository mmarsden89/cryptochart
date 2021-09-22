const CurrentPrice = (props) => {
  const { percentage, coinData, coin } = props.state;

  return (
    <div className="current-price">
      <div style={{ display: "flex" }}>
        <div className="coin-chart-header">{coin}</div>
        <div
          className={
            percentage > 0 ? "percentage positive" : "percentage negative"
          }
        >
          {percentage}%
        </div>
      </div>
      <div className="price-header">Current Price:</div>
      <div className="price-action">
        $
        {coinData[1] &&
          coinData[coinData.length - 1].close.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
      </div>
    </div>
  );
};

export default CurrentPrice;
