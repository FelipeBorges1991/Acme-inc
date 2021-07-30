import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function CartList() {
  return (
    <div>
      <Navbar />
      <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
        <h1>Carrinho de compras:</h1>
        <ul className="list-group">
          <li className="list-group-item">ITEMS</li>
          <li className="list-group-item"></li>
          <li className="list-group-item"></li>
          <li className="list-group-item justify-content-between">
            <span className="badge badge-default badge-pill"></span>
          </li>
          <li className="list-group-item"></li>
          <li className="list-group-item"></li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default CartList;
