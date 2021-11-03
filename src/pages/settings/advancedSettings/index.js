import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import Switch from "react-switch";
// COMPONENTS
import Header from "../../../components/header";
import BuyNow from "../../../components/buyNowSection";
import Carousel from "../../../components/carousel";
import Footer from "../../../components/footer";
// ICONS
import { FaArrowLeft } from "react-icons/fa";
// STYLES
import "../styles.css";

const Brightness = () => {
  const [check, setCheck] = useState(false);

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
            <h2 class="text-left">ADVANCED AUDIO SETTINGS</h2>
            <p class="large-text">
              The Doppler can further adjust the tuning automatically based on
              the volume to maximize the fidelity of the speakers. When you
              charge the volume at high levels, you may hear minor distortions
              for a few seconds while the Droppler adjusts the tuning.
              <br />
              <br />
              When this setting is off, the Doppler will use the high volume
              tuning for all volume levels.
            </p>
            <div class="use-24 mt-5">
              <p class="large-text">Match display and buttons color:</p>
              <div class="custom-control custom-switch">
                <Switch
                  onChange={() => setCheck(!check)}
                  checked={check}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  offColor="#707070"
                  onColor="#49c85a"
                />
                <label class="custom-control-label" for="customSwitch1"></label>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Brightness;
