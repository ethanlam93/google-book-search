import React from "react";
import "./style.css";

function Jumbotron({ children, style }) {
  return <div className="jumbotron mt-4" style={style}>{children}</div>;
}

export default Jumbotron;
