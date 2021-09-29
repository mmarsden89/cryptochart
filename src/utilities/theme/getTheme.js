import setTheme from "./setTheme.js";

const getTheme = () => {
  const dark = localStorage.getItem("dark");
  console.log(dark);
  if (dark === null) {
    setTheme();
  } else {
    return JSON.parse(dark);
  }
};

export default getTheme;
