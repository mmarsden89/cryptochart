import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import dayjs from "dayjs";

const Charts = (props) => {
  const [prices, setPrices] = useState([]);
  const [coinData, setCoinData] = useState([]);
  const [times, setTimes] = useState([]);

  const timeConverter = (time) => {
    return dayjs(time * 1000).format("MMM DD");
  };

  useEffect(() => {
    setCoinData(props.props);
    setTimes(props.props.map((single) => timeConverter(single.time)));
    setPrices(props.props.map((single) => single.close));
  }, [props]);

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
            return dayjs(props.props[tooltipItem.dataIndex].time * 1000).format(
              "MMMM DD hh:mm A"
            );
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
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
    <>
      <div className="header"></div>
      <Line data={data} options={options} />
    </>
  );
};

export default Charts;
