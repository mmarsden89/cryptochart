import "./Assets.scss";
import { useSelector } from "react-redux";

const Assets = () => {
  const { value } = useSelector((state) => state.assets);

  const assetsHTML = Object.keys(value).map((asset) => (
    <tr key={value[asset].symbol}>
      <td>{value[asset].symbol}</td>
      <td>{value[asset].amount}</td>
      <td>{value[asset].cost}</td>
    </tr>
  ));

  return (
    <div className="assets-container">
      <div className="asset-header">
        <h1>assets</h1>
      </div>
      <table>
        <tbody>
          <tr>
            <td>symbol</td>
            <td>Balance</td>
            <td>Price</td>
          </tr>
          {assetsHTML}
        </tbody>
      </table>
    </div>
  );
};

export default Assets;
