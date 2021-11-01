import React from "react";
import { Route, Link, useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
// components
import Header from "../../components/header";
import BuyNow from "../../components/buyNowSection";
import Carousel from "../../components/carousel";
import Footer from "../../components/footer";
import Input from "../../components/input";
// styles
import "./styles.css";

const AddDopler = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = `dashboard`;
    history.push(path);
  };

  return (
    <div>
      <Header />
      <BuyNow />
      <Carousel />
      <section
        class="login-bg"
        style={{ backgroundImage: "url(./images/login-bg.jpg)" }}
      >
        <div class="container">
          <a href="" onClick={routeChange} class="back-arrow">
            <FaArrowLeft />
          </a>
          <h2 class="text-left">name your doppler</h2>
          <p class="large-text mb-5">
            You can give your Doppler an awesome name, like Fido, Fred, or
            Gaget. You can also name it after the room it will live in, like
            Bedroom.
          </p>
          <label class="mb-4 custom-label">NAME YOUR DOPPLER</label>
          <Input type="text" placeHolder="Default Thing" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AddDopler;
