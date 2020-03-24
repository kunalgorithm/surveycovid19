import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import PieChart from "./components/PieChart";

function App() {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      hi
      <PieChart
        data={[
          {
            id: "go",
            label: "go",
            value: 295,
            color: "hsl(153, 70%, 50%)"
          },
          {
            id: "haskell",
            label: "haskell",
            value: 415,
            color: "hsl(85, 70%, 50%)"
          },
          {
            id: "erlang",
            label: "erlang",
            value: 402,
            color: "hsl(231, 70%, 50%)"
          },
          {
            id: "css",
            label: "css",
            value: 181,
            color: "hsl(305, 70%, 50%)"
          },
          {
            id: "elixir",
            label: "elixir",
            value: 446,
            color: "hsl(8, 70%, 50%)"
          }
        ]}
      />
    </div>
  );
}

export default App;
