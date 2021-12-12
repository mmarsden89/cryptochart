import "./Assets.scss";

const Assets = () => {
  const assetsList = JSON.parse(localStorage.getItem("portfolio"));

  const assetsHTML = assetsList.map((asset) => (
    <tr key={asset.symbol}>
      <td>{asset.symbol}</td>
      <td>{asset.amount}</td>
      <td>{asset.cost}</td>
    </tr>
  ));

  return (
    <div className="assets-container">
      <div className="asset-header">
        <h1>assets</h1>
      </div>
      <table>
        <tr>
          <td>symbol</td>
          <td>Balance</td>
          <td>Price</td>
        </tr>
        {assetsHTML}
      </table>
    </div>
  );
};

export default Assets;
