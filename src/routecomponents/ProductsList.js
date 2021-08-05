import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import api from "../apis/index";
import CartContext from "../contexts/cart/CartContext";
import { namesArr, description } from "../apis/globalVariables";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Carousel from "../components/Carousel";

import lupa from "../images/lupa.svg";
import star from "../images/star.svg";
import starFill from "../images/starFill.svg";

function ProductsList() {
  //States iniciais
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState(star);
  let isFavorite = false

  //Context do carrinho de compras
  const { addToCart } = useContext(CartContext);

  //Conexão com a API de fotos
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
  }, [favorite]);

  function handleChange() {
    isFavorite ^= true;
    if (isFavorite) {
      setFavorite(starFill);
    } else {
      setFavorite(star);
    }
  }

  console.log(search);

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

      <h1 className="text-center mb-2 p-4 pb-2">Produtos Acme</h1>

      <div className="d-flex justify-content-center mb-4" id="divBusca">
        <input
          type="text"
          id="txtBusca"
          placeholder="Buscar..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <img className="m-2" src={lupa} id="btnBusca" alt="Buscar" />
      </div>

      <div className="row d-flex m-0 align-items-center">
        {/* Implementação do filtro por nomes */}
        {products
          .filter((val, i) => {
            if (val === "") {
              return val;
            } else if (
              namesArr[i].toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((list, i) => {
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
                    value={search}
                  >
                    <p className="card-text text-center">
                      <strong>{namesArr[i]}</strong>
                    </p>
                    {/* Fórmula para preço dos produtos */}
                    <p>
                      R&#36;{" "}
                      {Math.abs(
                        Math.round(
                          (10 +
                            namesArr[i].length *
                              ((500 - description.length) /
                                (4 - namesArr[i].length)) +
                            Number.EPSILON) *
                            100
                        ) / 100
                      )}
                    </p>
                    <div className="d-flex justify-content-center ">
                      {/* Botão para adicionar produtos ao carrinho */}
                      <button
                        className="btn btn-primary border"
                        style={{ backgroundColor: "#193c40" }}
                        onClick={() => addToCart("")}
                      >
                        Adicionar ao carrinho
                      </button>
                      {/* Botão de favoritos */}
                      <button className="btn" onClick={handleChange}>
                        <img src={favorite} alt="Star"></img>
                      </button>
                    </div>
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
