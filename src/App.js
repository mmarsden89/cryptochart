import "./App.scss";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { getTheme, setTheme } from "./utilities/index.js";
import {
  Navbar,
  ErrorMessage,
  ChartWrapper,
  NewsWrapper,
  FourZeroFour,
} from "./components/index.js";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [dark, setDark] = useState(JSON.parse(getTheme()));

  // error message can be handled elsewhere
  // current stopgap until further refactor
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
