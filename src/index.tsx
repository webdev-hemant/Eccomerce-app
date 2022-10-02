import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalContext from "context/GlobalContextProvider";
import MyErrorBoundary from "components/errorBoundary/MyErrorBoundary";
import "react-loading-skeleton/dist/skeleton.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";
import "cssGlobal/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyErrorBoundary FallbackComponent={<h1>something went wrong</h1>}>
      <GlobalContext>
        <App />
      </GlobalContext>
    </MyErrorBoundary>
  </React.StrictMode>
);
