import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import Switch from "react-switch";
// COMPONENTS
import Header from "../../../components/header";
import BuyNow from "../../../components/buyNowSection";
import Carousel from "../../../components/carousel";
import Footer from "../../../components/footer";
// ICONS
import { FaArrowLeft } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
// STYLES
import "../styles.css";
import Input from "../../../components/input";

const Brightness = () => {
  const [day, setDay] = useState(0);
  const [night, setNight] = useState(0);
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
            <h2 class="text-left">BRIGHTNESS</h2>

            <div class="custom-range-slider">
              <label class="custom-label mb-3 mt-5">
                Day Brightness : <span class="output">{day}</span>%
              </label>
              <div class="brightness">
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FaRegSun size={24} />
                  <FaSun size={24} />
                </div>
                <RangeSlider
                  style={{}}
                  value={day}
                  onChange={(changeEvent) => setDay(changeEvent.target.value)}
                  tooltip="off"
                  variant="light"
                  size="lg"
                />
                {/* <img src="./assets/images/brightness-icon.png" alt="" /> */}
              </div>
            </div>

            <div class="custom-range-slider mt-3">
              <label class="custom-label mb-3 mt-5">
                Night Brightness : <span class="output2">{night}</span>%
              </label>
              <div class="brightness">
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FaRegSun size={24} />
                  <FaSun size={24} />
                </div>
                <RangeSlider
                  style={{ width: "100%" }}
                  value={night}
                  onChange={(changeEvent) => setNight(changeEvent.target.value)}
                  tooltip="off"
                  variant="light"
                />
              </div>
            </div>

            <div class="use-24 mt-5">
              <p>Match display and buttons:</p>
              <div class="custom-control custom-switch">
                <Switch
                  onChange={() => setCheck(!check)}
                  checked={check}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  offColor="#707070"
                  onColor="#49c85a"
                />
                {/* <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customSwitch1"
                /> */}
                <label class="custom-control-label" for="customSwitch1"></label>
              </div>
            </div>

            <a href="#" class="white-btn mt-5">
              Restore to defaults
            </a>

            <a href="#" class="white-btn mt-3">
              Show Advanced Settings
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Brightness;
