import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { BasketProvider } from "./Components/store/Basketcontext.jsx";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import "./App.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      <Router>
        <App />
      </Router>
    </BasketProvider>
  </React.StrictMode>
);
