import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { RequestProvider } from './providers/requestProvider/index.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <RequestProvider> */}
      <App />
      {/* </RequestProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
