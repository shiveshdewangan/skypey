import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./store";
import App from "./containers/App";

const render = () => {
  return ReactDOM.render(<App />, document.getElementById("root"));
};

render();
store.subscribe(render);
