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
          <a href="/settings" class="back-arrow">
            <FaArrowLeft />
          </a>
          <h2 class="text-left">ADVANCED SETTINGS</h2>
          <p class="large-text">
            Turning on blackout mode will completely dim the buttons and display
            when your Droppler is in night mode. This will override and replace
            our current selections. <br />
            <br />
            When your Droppler is in blackout mode, you can press andy of the
            buttons to have the buttons glow softly for 20 seconds.
          </p>

          <div class="use-24 mt-5">
            <p class="large-text">Select blackout mode:</p>
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

          <p class="large-text">
            Your Doppler has a light sensor that is uses to determine whether it
            should be in day or night mode. You can adjust the point at which
            the Doppler will change modes.
            <br />
            <br />
            Doppler is currently in <br />
            <br />
            Current light sensor value: 12
          </p>

          <div class="container-sm-500">
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
export default Brightness;
