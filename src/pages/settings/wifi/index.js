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

const wifi = () => {
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
          <div class="">
            <a href="/settings" class="back-arrow">
              <FaArrowLeft />
            </a>
            <h2 class="text-left">DOPPLER INFORMATION</h2>
            <p class="large-text">
              If you wish to charge your Droppler’s wifi, you will need to
              factory resetit. Hold down the plus and minus buttons for about 5
              seconds, then press green button. Do not unplug your Doppler as it
              is resetting.
              <br />
              <br />
              You will need to forget the Doppler from your phone’s bluetooth
              menu and turn your bluetooth menu and turn your blutooth on and
              off to completely reset it
            </p>
            <div class="text-center mt-5">
              <img src="assets/images/device.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default wifi;
