import React from "react";
import { Spin } from "antd";
import "./index.scss";

const LoadingComponent = () => {
  return (
    <div className="content">
      <Spin size="large" tip="Cargando..." />
    </div>
  );
};

export default LoadingComponent;
