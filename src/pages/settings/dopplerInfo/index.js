import React from "react";
// COMPONENTS
import Header from "../../../components/header";
import BuyNow from "../../../components/buyNowSection";
import Carousel from "../../../components/carousel";
import Footer from "../../../components/footer";
// ICONS
import { FaArrowLeft } from "react-icons/fa";
// STYLES
import "../styles.css";

const dopplerInfo = () => {
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
          <div class="container-sm-500">
            <a href="/settings" class="back-arrow">
              <FaArrowLeft />
            </a>
            <h2 class="text-left">DOPPLER INFORMATION</h2>
            <p style={{ marginLeft: 34 }}>
              Serial number: Doppler-3c2821edf
              <br />
              <br />
              Firmware version: Escapement
              <br />
              <br />
              Hardware version: Enter Sandman
              <br />
              <br />
              Software version: 1182
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default dopplerInfo;
