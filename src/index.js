import ReactDOM from "react-dom";
import React from "react";
import Blah from "./blah.js";

const rootEl = document.getElementById('root');

ReactDOM.render(<Blah/>, rootEl);

if (module.hot) {
  module.hot.accept();
}