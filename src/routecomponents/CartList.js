import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function CartList() {
  return (
    <div>
    <Navbar/>
      <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <h1>Carrinho de compras:</h1>
        <ul className="list-group">
          <li className="list-group-item">Cras justo odiodasfasfasfasfgasfasfasfa faasfasfsdfsd fasfas</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item justify-content-between">
            Cras justo odio
            <span className="badge badge-default badge-pill">14</span>
          </li>
          <li className="list-group-item">Vestibulum at eros</li>
          <li className="list-group-item">
            Dapibus ac facilisis in
          </li>
        </ul>
      </div>
      <Footer/>
    </div>
  );
}

export default CartList;
