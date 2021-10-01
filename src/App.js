import "./App.scss";
import Navbar from "./Components/Navbar/Navbar.js";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage.js";
import { Route, Switch } from "react-router-dom";
import ChartWrapper from "./Components/Charts/ChartWrapper.js";
import NewsWrapper from "./Components/News/NewsWrapper.js";
import React, { useState, useEffect } from "react";
import { getTheme, setTheme } from "./utilities/index.js";
import FourZeroFour from "./Components/FourZeroFour/FourZeroFour.js";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [dark, setDark] = useState(JSON.parse(getTheme()));

  const defaultError = () => {
    setErrorMessage("");
  };

  const flipError = (message) => {
    setErrorMessage(message);
    setTimeout(defaultError, 4000);
  };

  const flipTheme = () => {
    setDark(!dark);
    setTheme();
  };

  useEffect(() => {
    getTheme();
  });

  return (
    <div className={"App " + (dark ? "theme-dark" : "theme-light")}>
      <Navbar flipTheme={flipTheme} dark={dark} />
      {errorMessage.length > 0 && <ErrorMessage message={errorMessage} />}
      <div className="component-container">
        <Switch>
          <Route exact path="/">
            <ChartWrapper flipError={flipError} />
            <NewsWrapper />
          </Route>
          <Route exact path="/news">
            <NewsWrapper />
          </Route>
          <Route>
            <FourZeroFour />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
