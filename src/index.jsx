import ReactDOM from "react-dom";
import React from "react";
import "./global.css";

ReactDOM.render(/* insert app here */, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
