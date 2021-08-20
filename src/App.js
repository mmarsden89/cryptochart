import "./App.scss";
import Navbar from "./Components/Navbar/Navbar.js";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="component-container">
        <div
          style={{
            backgroundColor: "white",
            width: "500px",
            height: "500px",
            border: "1px solid #d1cece",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
