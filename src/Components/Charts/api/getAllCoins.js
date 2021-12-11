import axios from "axios";

const getAllCoins = async () => {
  const api = await axios(
    "https://min-api.cryptocompare.com/data/all/coinlist?summary=true"
  );
  const { Data } = api.data;
  // setSymbolList(Object.keys(Data));
  return api;
};

export default getAllCoins;
