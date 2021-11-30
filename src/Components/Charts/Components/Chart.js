import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getTheme } from "../../../utilities/index.js";
import "../Charts.scss";
import returnOptions from "./options.js";

// Graph component
const Chart = (props) => {
  const { times, prices, coinData } = props;

  useEffect(() => {}, [coinData, times, prices]);

  // returns whether to use light or dark theme
  const lineColor = getTheme() ? "#3773f5" : "rgba(0,82,255, .8)";
  const fontColor = getTheme() ? "white" : "black";

  // formatted data for chartjs
  const data = {
    labels: times,
    datasets: [
      {
        borderWidth: 2,
        data: prices,
        borderColor: lineColor,
        pointRadius: 0,
        spanGaps: false,
      },
    ],
  };

  return (
    <div className="line-container">
      <Line data={data} options={returnOptions(coinData, fontColor)} />
    </div>
  );
};

export default Chart;
