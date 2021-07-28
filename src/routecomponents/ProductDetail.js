import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../apis/index";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
                cumque delectus deleniti dolor esse ex fugiat, id in ipsum modi
                molestiae mollitia, nulla numquam provident quasi soluta sunt
                tempora vel. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Accusamus, aspernatur consequuntur cumque dolor ducimus
                earum eos, expedita, fuga harum incidunt maxime modi mollitia
                numquam praesentium sapiente suscipit temporibus ut vero. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Amet nam
                nostrum pariatur praesentium tempore. Ad architecto at aut dicta
                enim, eveniet expedita libero magnam minus, nihil, non sequi
                sunt voluptates!
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      {/* <div className="container d-flex flex-column justify-content-center align-items-center">
        <img
          className="w-50 h-50 mt-2 img-thumbnail"
          style={{ backgroundColor: "#F28705", border: "none" }}
          key={product.id}
          src={product.download_url}
          alt="Product"
        ></img>
        <div className="card mt-3" style={{ backgroundColor: "#F28705" }}>
          <h3 className="mb-0 mt-2 align-self-center">
            <strong>Descrição: </strong>
          </h3>
          <div className="card-body d-flex text-center">
            <p>
              Lorem ipsum.Tipo assim quando eu quiser colocar um monte de texto
              como ele vai ficar pra o card nbody se ajustar e não ir até o
              final da página e quebrar tudo......ad sa d asf sdf g gdsfdf gsdg
              sdgsdg gsdg ss rqwe rwfs vx v wdf sdfsdvx cv dsg dgsd vx v d gsdv
              xvx.f sdfsd f ds,x vxv sd fsd;sx vxv sd sd fsd;sdf dffdsfsdf gsdgs
              dsd bsd vbrvc ewcwecwecwe csdczd cvsd vsdv sdcds cew ce sd
              csdvdsvsdv dscds cas casc
            </p>
          </div>
        </div> */}

      {/* </div> */}
      <Footer />
    </div>
  );
}

export default ProductDetail;
