const CoinButtons = (props) => {
  const {
    functions: { deleteCoin, setNewCoin, chartButtonClassName },
    state: { coinList, newCoinBoolean },
    html: { buttonOrInput },
  } = props;

  return (
    <div className="coin-button-container">
      {coinList.map((singleCoin) => (
        <button
          onClick={newCoinBoolean ? deleteCoin : setNewCoin}
          id={singleCoin}
          className={chartButtonClassName(singleCoin)}
          key={singleCoin}
        >
          {singleCoin}
        </button>
      ))}
      {buttonOrInput}
    </div>
  );
};

export default CoinButtons;
