import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "cssGlobal/index.css";
import "react-loading-skeleton/dist/skeleton.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
