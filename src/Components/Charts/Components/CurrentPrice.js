const CurrentPrice = (props) => {
  const { percentage, coinData, coin } = props.state;

  const currentPriceFormatted = () => {
    return coinData[coinData.length - 1].close > 10
      ? coinData[coinData.length - 1].close.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        })
      : coinData[coinData.length - 1].close;
  };

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
      <div className="price-action">${currentPriceFormatted()}</div>
    </div>
  );
};

export default CurrentPrice;
