import dayjs from "dayjs";

const rawOrFormatted = (number) => {
  return number.raw > 10 ? number.formattedValue : number.raw;
};
const returnOptions = (coinData, fontColor) => {
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
            return "$" + rawOrFormatted(tooltipItem[0]);
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
          color: fontColor,
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 64);
            return {
              size: size > 10 ? size : 10,
            };
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
  return options;
};

export default returnOptions;
