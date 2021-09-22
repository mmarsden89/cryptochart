import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import dayjs from "dayjs";
import "../Charts.scss";

const Chart = (props) => {
  const { times, prices, coinData } = props;
  useEffect(() => {}, [coinData, times, prices]);

  const data = {
    labels: times,
    datasets: [
      {
        borderWidth: 2,
        data: prices,
        borderColor: "rgba(0,82,255, .8)",
        pointRadius: 0,
        spanGaps: false,
      },
    ],
  };

  const options = {
    animation: false,
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 50,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        z: 100,
        caretPadding: 20,
        yAlign: "bottom",
        titleFont: { size: 20 },
        titleAlign: "center",
        bodyAlign: "center",
        intersect: false,
        backgroundColor: "#000",
        displayColors: false,
        callbacks: {
          title: function (tooltipItem) {
            return "$" + tooltipItem[0].formattedValue;
          },
          label: function (tooltipItem) {
            return dayjs(coinData[tooltipItem.dataIndex].time * 1000).format(
              "MMMM DD hh:mm A"
            );
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          align: "start",
          autoSkip: true,
          maxRotation: 0,
          minRotation: 0,
          maxTicksLimit: 8,
          font: {
            size: 15,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="line-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
