import { useContext } from "react";
import CartContext from "../contexts/cart/CartContext";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function CartList() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <Navbar />
      <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
        <h1 className="m-2">Carrinho de compras:</h1>
        {cartItems.length === 0 ? (
          <h4>O carrinho está vazio</h4>
        ) : (
          <ul className="list-group w-50 h-50 text-center">
            {cartItems.map((item) => (
              <li className="list-group-item" key={item[0]} item={item}></li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CartList;
