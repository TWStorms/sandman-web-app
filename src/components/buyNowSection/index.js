import "./styles.css";
const BuyNow = () => {
  return (
    <section className="buy-now-header">
      <div className="container d-flex justify-content-center justify-content-sm-end align-items-center">
        <p className="d-sm-block d-none mb-0">
          Now Shipping! (Limited Availability) <strong>$199.99</strong>
        </p>
        <p className="d-sm-none d-block mb-0">
          Limited Availability <strong>$199.99</strong>
        </p>
        <button className="buy-now">BUY NOW</button>
      </div>
    </section>
  );
};

export default BuyNow;
