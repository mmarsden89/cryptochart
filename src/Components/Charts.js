import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const Charts = (props) => {
  const [prices, setPrices] = useState([]);
  const [coinData, setCoinData] = useState([]);
  const [times, setTimes] = useState([]);

  const timeConverter = (time) => {
    console.log(new Date(time * 1000));
  };

  //   console.log(props.props);
  //   console.log(timeConverter(props.props[0].time));

  useEffect(() => {
    setCoinData(props.props);
    // console.log(coinData);
    setTimes(props.props.map((single) => timeConverter(single.time)));
  }, [props]);

  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
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
