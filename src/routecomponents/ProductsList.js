import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import api from "../apis/index";
// import Footer from "../components/Footer";


function ProductsList() {
  const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await api.get(
          
//         );

//         console.log(response);

//         setProducts(response);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     fetchProducts();
//   }, []);

  return (
    <div className="container-fluid">
      <h1>Hello World</h1>
    </div>
  );
}

export default ProductsList;
