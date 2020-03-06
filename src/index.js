import React from "react";
import ReactDOM from "react-dom";
import { Timer } from "./Timer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
