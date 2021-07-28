import harry from "../images/Harry.jpg";

function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img
            className="d-block img-fluid"
            style={{ opacity: "0.4" }}
            src={harry}
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block img-fluid"
            src="/bootstrap-themes/demo/images/slider2.png"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block img-fluid"
            src="/bootstrap-themes/demo/images/slider3.png"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only"></span>
      </a>
    </div>
  );
}

export default Carousel;
