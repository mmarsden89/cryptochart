import "./App.scss";
import Navbar from "./Components/Navbar/Navbar.js";
// import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
// import "frappe-charts/dist/frappe-charts.min.css";
import Charts from "./Components/Charts.js";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const apiCall = async () => {
    const whatever = await axios(
      "https://min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=USD&limit=168"
    );
    console.log(whatever.data.Data.Data);
    setData(whatever.data.Data.Data);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="component-container">
        <div
          style={{
            backgroundColor: "white",
            width: "950px",
            height: "400px",
            border: "1px solid #d1cece",
          }}
        >
          <div className="current-price">
            <div className="price-header">Current Price:</div>
            <div className="price-action">
              $
              {data[1] &&
                data[data.length - 1].close.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
            </div>
          </div>
          {data && <Charts props={data} />}
        </div>
      </div>
    </div>
  );
}

export default App;
