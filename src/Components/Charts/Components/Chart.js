import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getTheme } from "../../../utilities/index.js";
import "../Charts.scss";
import returnOptions from "./options.js";

const Chart = (props) => {
  const { times, prices, coinData } = props;
  useEffect(() => {}, [coinData, times, prices]);

  const lineColor = getTheme() ? "#3773f5" : "rgba(0,82,255, .8)";
  const fontColor = getTheme() ? "white" : "black";

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
