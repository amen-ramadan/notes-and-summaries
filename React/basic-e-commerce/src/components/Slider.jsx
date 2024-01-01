import "./Slider.css";
import image_1 from "../Images/image-1.webp";
import image_2 from "../Images/images-2.webp";
import image_3 from "../Images/image-3.webp";

export default function Slider() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image_1} className="d-block w-100 height-500" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image_2} className="d-block w-100 height-500" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image_3} className="d-block w-100 height-500" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
