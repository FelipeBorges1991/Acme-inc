import houseIcon from "../images/house-fill.svg";
import cart from "../images/cart.svg";

function Navbar() {
  return (
    <nav
      className="navbar justify-content-between sticky-top"
      style={{ backgroundColor: "#F28705" }}
    >
      <a className="navbar-brand" href="/">
        <img
          src={houseIcon}
          width="30"
          height="auto"
          alt="House icon"
          style={{ marginLeft: "20px" }}
        ></img>
      </a>
      <a className="navbar-brand" href="/">
        <img
          src={cart}
          width="30"
          height="auto"
          alt="Cart icon"
          style={{ marginRight: "15px" }}
        ></img>
      </a>
    </nav>
  );
}

export default Navbar;
