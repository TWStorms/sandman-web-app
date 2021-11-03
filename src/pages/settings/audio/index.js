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
import { FaArrowLeft, FaInfoCircle, FaCheck, FaCircle } from "react-icons/fa";
// STYLES
import "../styles.css";

const Audio = () => {
  const [volume, setVolume] = useState(0);

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
            <h2 class="text-left" style={{ textAlign: "left" }}>
              AUDIO SETTINGS
            </h2>
            <ul class="audio-bullets">
              <li>
                <FaCircle className="active" />
              </li>
              <li>
                <FaCircle className="active" />
              </li>
              <li>
                <FaCircle className="active" />
              </li>
              <li>
                <FaCircle className="active" />
              </li>
              <li>
                <FaCircle className="active" />
              </li>
              <li>
                <FaCircle className="active" />
              </li>
              <li>
                <FaCircle className="active" />
              </li>
              <li>
                <FaCircle className="active" />
              </li>
              <li>
                <FaCircle className="" />
              </li>
              <li>
                <FaCircle className="" />
              </li>
              <li>
                <FaCircle className="" />
              </li>
              <li>
                <FaCircle className="" />
              </li>
            </ul>

            <p class="large-text mb-5">
              You can choose between different autio presets for your Doppler
              based on howyou would like your music to sound.
              <br />
              <br />
              While presets are being adjusted, you may hear minor distortions
              for a few seconds.
            </p>

            <label class="custom-label mb-4">Select Preset:</label>
            <ul>
              <li>
                <label
                  class="custom-radio"
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p>
                      <FaCheck /> Bass boost
                    </p>
                  </div>
                  <FaInfoCircle />
                </label>
              </li>
              <li>
                <label
                  class="custom-radio"
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p>
                      <FaCheck /> Mids boost
                    </p>
                  </div>
                  <FaInfoCircle />
                </label>
              </li>
              <li>
                <label
                  class="custom-radio"
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p>
                      <FaCheck /> Treble boost
                    </p>
                  </div>
                  <FaInfoCircle />
                </label>
              </li>
              <li>
                <label
                  class="custom-radio"
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p>
                      <FaCheck /> Balanced
                    </p>
                  </div>
                  <FaInfoCircle />
                </label>
              </li>
              <li>
                <label
                  class="custom-radio"
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p>
                      <FaCheck /> Untuned
                    </p>
                  </div>
                  <FaInfoCircle />
                </label>
              </li>
            </ul>

            <div class="custom-range-slider">
              <label class="custom-label mb-3 mt-5">Volume : {volume}</label>

              <RangeSlider
                style={{ width: "100%" }}
                value={volume}
                onChange={(changeEvent) => setVolume(changeEvent.target.value)}
                tooltip="off"
                variant="light"
              />
            </div>
            <a href="#" class="white-btn mt-5">
              Show Advanced Settings
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Audio;
