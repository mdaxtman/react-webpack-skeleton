import ReactDOM from "react-dom";
import React from "react";
import "./global.css";

ReactDOM.render(<div>hi\</div>, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
