import "./styles.css";
import { Carousel } from "react-bootstrap";
const CarouselSection = () => {
  return (
    <Carousel className="carousel-div pt-5">
      <Carousel.Item interval={10000}>
        <div className=" d-flex flex-column flex-md-row justify-content-around justify-content-md-between px-5">
          <div className=" col-md-4 heading-color ">
            <h1 className="px-4 carousel-heading1 d-none d-md-block">THE ALARM CLOCK EVOLVED</h1>
            <h1 className="d-block d-md-none">THE ALARM CLOCK EVOLVED</h1>
          </div>
          <div className="heading-color icon-heading d-flex col-md-5 col ml-auto align-items-center">
            <h1 className="carousel-heading2 d-none d-md-block">
              SANDMAN <span>DOPLER</span>
              SMART CLOCK
            </h1>
            <h1 className="d-block d-md-none">SANDMAN <span>DOPLER</span>
              SMART CLOCK</h1>
          </div>
        </div>
        <img
          className="d-block w-100"
          src="./images/banner-img.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div className=" d-flex flex-column flex-md-row justify-content-around justify-content-md-between px-5">
          <div className="col-md-4 col">
          <h1 className="px-4 carousel-heading1 d-none d-md-block">THE ALARM CLOCK EVOLVED</h1>
            <h1 className="d-block d-md-none">THE ALARM CLOCK EVOLVED</h1>
          </div>
          <div className="icon-heading d-flex col-md-5 col ml-auto align-items-center">
          <h1 className="carousel-heading2 d-none d-md-block">
              SANDMAN <span>DOPLER</span>
              SMART CLOCK
            </h1>
            <h1 className="d-block d-md-none">SANDMAN <span>DOPLER</span>
              SMART CLOCK</h1>
          </div>
        </div>

        <img
          className="d-block w-100"
          src="./images/banner-img.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <div className=" d-flex flex-column flex-md-row justify-content-around justify-content-md-between px-5">
          <div className="col-md-4 col">
          <h1 className="px-4 carousel-heading1 d-none d-md-block">THE ALARM CLOCK EVOLVED</h1>
            <h1 className="d-block d-md-none">THE ALARM CLOCK EVOLVED</h1>
          </div>
          <div className="icon-heading d-flex col-md-5  col ml-auto align-items-center">
          <h1 className="carousel-heading2 d-none d-md-block">
              SANDMAN <span>DOPLER</span>
              SMART CLOCK
            </h1>
            <h1 className="d-block d-md-none">SANDMAN <span>DOPLER</span>
              SMART CLOCK</h1>
          </div>
        </div>
        <img
          className="d-block w-100"
          src="./images/banner-img.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSection;
