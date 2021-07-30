import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import CartState from "./contexts/cart/CartState";

ReactDOM.render(
  <React.StrictMode>
    <CartState>
      <App />
    </CartState>
  </React.StrictMode>,
  document.getElementById("root")
);
