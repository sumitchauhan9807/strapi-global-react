import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "src/redux/store";
import { Provider } from "react-redux";
import './i18';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store().store}>
      <App />
    </Provider>
  </React.StrictMode>
);
