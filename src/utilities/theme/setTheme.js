const setTheme = () => {
  const dark = localStorage.getItem("dark");
  if (JSON.parse(dark)) {
    localStorage.setItem("dark", false);
  } else {
    localStorage.setItem("dark", true);
  }
};

export default setTheme;
