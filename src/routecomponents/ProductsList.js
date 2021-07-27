import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../apis/index";
// import Footer from "../components/Footer";

function ProductsList() {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="container-fluid">
      <h1 className="text-center mb-2 p-4 pb-2">Lista de produtos</h1>
      <hr></hr>
      <div className="row d-flex m-0 align-items-center">
        {products.map((list) => {
          return (
            <div className="col-12 col-sm-4 col-md-3 align-items">
              <div
                className="card m-2 border border-none"
                style={{ width: "18rem", backgroundColor: "#193c40" }}
              >
                <Link className="bloco">
                  <img
                    key={list.id}
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
                    <strong>Nome do produto</strong>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="row d-flex justify-content-center">
        {products.map((x) => {
          return (
            <Link>
              <img
                className="card-img-top m-3 mb-5"
                key={x.id}
                src={x.download_url}
                alt="Imagem do produto"
                style={{ height: "16rem", width: "16rem" }}
              ></img>
            </Link>
          );
        })}
      </div> */}
    </div>
  );
}

export default ProductsList;
