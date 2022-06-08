import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.min.css";
import "./asset/index.css";
import reportWebVitals from "./reportWebVitals";
import RouterMount from "./pages/main/router";
import { ConfigProvider } from "antd";
import esES from "antd/lib/locale/es_ES";
import 'moment/locale/es';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={esES}>
    <RouterMount />
  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
