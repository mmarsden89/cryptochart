import { Link } from "react-router-dom";

const CoinInput = (props) => {
  const {
    state: { symbol, symbolList },
    functions: { handleChange, handleNewCoin, handleBlur },
  } = props;

  const inputHTML = (
    <div onBlur={handleBlur} className="input-container">
      <input
        className="new-coin-input"
        placeholder="SYMBOL"
        value={symbol}
        onChange={handleChange}
        type="text"
        autoFocus
      />

      <div className="coin-search-container">
        {symbol.length > 0 &&
          symbolList
            .sort()
            .slice(0, 10)
            .map((sym) => (
              <button
                className="coin-list-item"
                onClick={handleNewCoin}
                id={sym}
                key={sym}
              >
                {sym}
              </button>
            ))}

        <button className="cancel">cancel</button>
      </div>
    </div>
  );

  return inputHTML;
};

export default CoinInput;
