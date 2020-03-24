import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Papa from "papaparse";
import { csv } from "d3";

function App() {
  const [rows, setRows] = React.useState([]);
  useEffect(() => {
    csv("./data/MasterExcel2.csv").then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {rows.length}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
