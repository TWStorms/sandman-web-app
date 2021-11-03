import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import Switch from "react-switch";
import { ColorPicker } from "material-ui-color";
// COMPONENTS
import Header from "../../../components/header";
import BuyNow from "../../../components/buyNowSection";
import Carousel from "../../../components/carousel";
import Footer from "../../../components/footer";
// ICONS
import { FaArrowLeft } from "react-icons/fa";
// STYLES
import "../styles.css";

const DopplerColor = () => {
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
          <div class="container-sm-500">
            <a href="/settings" class="back-arrow">
              <FaArrowLeft />
            </a>
            <h2 class="text-left">DOPPLER COLORS</h2>
            <ul class="doppler-colors">
              <li>
                <p>Match display and buttons color:</p>
                <div class="custom-control custom-switch">
                  <Switch
                    onChange={() => setCheck(!check)}
                    checked={check}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    offColor="#707070"
                    onColor="#49c85a"
                  />
                  <label
                    class="custom-control-label"
                    for="customSwitch1"
                  ></label>
                </div>
              </li>
              <li>
                <p>Match day and night color:</p>
                <div class="custom-control custom-switch">
                  <Switch
                    onChange={() => setCheck(!check)}
                    checked={check}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    offColor="#707070"
                    onColor="#49c85a"
                  />
                  <label
                    class="custom-control-label"
                    for="customSwitch2"
                  ></label>
                </div>
              </li>
              <li>
                <p>(Doppler is currently in night mode.)</p>
              </li>
              <li>
                <p>Display day color</p>
                <ColorPicker defaultValue="#FBEA2E" />
              </li>
              <li>
                <p>Display night color</p>
                {/* <span class="color-box color2"></span> */}
                <ColorPicker defaultValue="#ffffff" />
              </li>
              <li>
                <p>Buttons day color</p>
                <ColorPicker defaultValue="#FC1000" />
              </li>
              <li>
                <p>Buttons night color</p>
                <ColorPicker defaultValue="#96EA7D" />
              </li>
            </ul>
            <a href="#" class="white-btn mt-5">
              Restore to defaults
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default DopplerColor;
