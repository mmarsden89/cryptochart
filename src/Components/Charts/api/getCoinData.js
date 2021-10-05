import axios from "axios";
import dayjs from "dayjs";

const timeConverter = (time, timeline) => {
  let formattedTime = dayjs(time * 1000).format("MMM DD");
  if (timeline === "24H" || timeline === "1H") {
    formattedTime = dayjs(time * 1000).format("hh:mm a");
  }
  return formattedTime;
};

const getCoinData = async (
  coin,
  timeline,
  setCoinData,
  setTimes,
  setPrices,
  setPercentage
) => {
  const urls = {
    "1Y": `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=USD&limit=365`,
    "1M": `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=USD&limit=30`,
    "1W": `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${coin}&tsym=USD&limit=168`,
    "24H": `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${coin}&tsym=USD&limit=1440&aggregate=5`,
    "1H": `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${coin}&tsym=USD&limit=60`,
  };
  const api = await axios(urls[timeline]);

  const dataToSet = api.data.Data.Data;

  setCoinData(dataToSet);
  setTimes(dataToSet.map((single) => timeConverter(single.time, timeline)));
  setPrices(dataToSet.map((single) => single.close));

  const percentageCalc =
    Math.round(
      ((dataToSet[dataToSet.length - 1].close - dataToSet[0].close) /
        dataToSet[0].close) *
        100 *
        100
    ) / 100;

  setPercentage(percentageCalc);
  return dataToSet;
};

export default getCoinData;
