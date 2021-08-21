import "./App.scss";
import Navbar from "./Components/Navbar/Navbar.js";
// import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
// import "frappe-charts/dist/frappe-charts.min.css";
import Charts from "./Components/Charts.js";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(async () => {
    const call = await axios(
      "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10"
    );
    setData(call.data.Data);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="component-container">
        <div
          style={{
            backgroundColor: "white",
            width: "500px",
            height: "500px",
            border: "1px solid #d1cece",
          }}
        >
          <Charts props={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
