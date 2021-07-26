import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <h1
        className="mb-3"
        style={{
          fontWeight: "bolder",
        }}
      >
        Acme inc.
      </h1>
      <h3 className="text-center">Encontre aqui os melhores produtos do mercado</h3>

      <div
        className="btn-group btn-group-lg container d-flex justify-content-center"
        role="group"
        aria-label="Basic example"
      >
        <Link to={"/products"}>
          <button
            type="button"
            className="btn"
            style={{
              fontWeight: "bolder",
              backgroundColor: "#F28705",
            }}
          >
            Entre Aqui
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
