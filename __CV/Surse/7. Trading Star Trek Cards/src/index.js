import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from './context/AppContext'
import "./index.css";

import App from "./App";

function Root() {
  return (
    <BrowserRouter>
     <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
