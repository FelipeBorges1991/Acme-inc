import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../apis/index";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { description } from "../apis/globalVariables"

function ProductDetail() {
  const [product, setProduct] = useState({
    download_url: "",
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchOneProduct() {
      try {
        const response = await api.get(`/id/${id}/info`);

        console.log(response);

        setProduct({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchOneProduct();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <img
          className="w-50 h-50 mt-2 mb-2 img-thumbnail"
          style={{ backgroundColor: "#F28705", border: "none" }}
          key={product.id}
          src={product.download_url}
          alt="Product"
        ></img>
        <div
          className="card mb-3 text-center border-primary"
          style={{ backgroundColor: "#F28705" }}
        >
          <div className="card-body">
            <blockquote className="card-blockquote">
              <h3>Descrição:</h3>
              <p>
                {description}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
