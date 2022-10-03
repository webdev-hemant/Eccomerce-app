import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalContext from "context/GlobalContextProvider";
import "react-loading-skeleton/dist/skeleton.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";
import "cssGlobal/index.css";
import { ErrorBoundary } from "components/errorBoundary/ClassErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <GlobalContext>
        <App />
      </GlobalContext>
    </ErrorBoundary>
  </React.StrictMode>
);
