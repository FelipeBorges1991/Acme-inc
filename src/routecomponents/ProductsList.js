import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import api from "../apis/index";
import CartContext from "../contexts/cart/CartContext";
import { savedProduct } from "../apis/globalVariables";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

function ProductsList() {
  const [products, setProducts] = useState([]);
  // const [search, setSearch] = useState("");

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get(`/v2/list?limit=30`);

        console.log(response.data);

        setProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, []);

  console.log(savedProduct);

  return (
    <div className="container-fluid p-0 text-center">
      <Navbar />

      {/* Devido a dificuldades externas, não consegui implementar o efeito carrossel */}
      {/* {products.map((img) => {
        return (
          <div className="container" key={img.download_url}>
            <Carousel img={img} />
          </div>
        );
      })} */}

      <h1 className="text-center mb-2 p-4 pb-2">
        Produtos Acme
      </h1>
      <hr></hr>
      <input
        type="text"
        placeholder="Busque um produto"
        // onChange={(event) => {
        //   setSearch(event.target.value);
        // }}
      ></input>
      <div className="row d-flex m-0 align-items-center">
        {products.map((list) => {
          return (
            <div className="col-12 col-sm-4 col-md-3 align-items">
              <div
                className="card m-2 border border-dark"
                style={{ width: "18rem", backgroundColor: "#193C40" }}
              >
                <Link
                  className="bloco"
                  key={list.id}
                  to={`/productdetail/${list.id}`}
                >
                  <img
                    src={list.download_url}
                    className="card-img-top"
                    style={{ height: "18rem" }}
                    alt="Game poster"
                  />
                </Link>

                <div
                  className="card-body"
                  style={{ backgroundColor: "#F28705" }}
                >
                  <p className="card-text text-center">
                    <strong>
                      {savedProduct.map((x) => {
                        return x[Math.floor(Math.random() * 50)];
                      })}
                    </strong>
                  </p>

                  <p>R&#36; Valor</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart("")}
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default ProductsList;
