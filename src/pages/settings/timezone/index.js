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

const TimezoneSettings = () => {
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
          <h2 class="text-left" style={{ textAlign: "left" }}>
            SELECT TIMEZONE
          </h2>
          <div class="use-24">
            <p>USE 24-HOUR FORMAT</p>
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
          <ul class="timezone-listing">
            <li>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultUnchecked"
                />
                <label
                  style={{ marginLeft: 5 }}
                  class="custom-control-label"
                  for="defaultUnchecked"
                >
                  Pacific
                </label>
              </div>
              <p>UTC-08:00</p>
            </li>
            <li>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultUnchecked"
                />
                <label
                  style={{ marginLeft: 5 }}
                  class="custom-control-label"
                  for="defaultUnchecked"
                >
                  Pacific
                </label>
              </div>
              <p>UTC-08:00</p>
            </li>
            <li>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultUnchecked"
                />
                <label
                  style={{ marginLeft: 5 }}
                  class="custom-control-label"
                  for="defaultUnchecked"
                >
                  Pacific
                </label>
              </div>
              <p>UTC-08:00</p>
            </li>
            <li>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultUnchecked"
                />
                <label
                  style={{ marginLeft: 5 }}
                  class="custom-control-label"
                  for="defaultUnchecked"
                >
                  Pacific
                </label>
              </div>
              <p>UTC-08:00</p>
            </li>
            <li>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultUnchecked"
                />
                <label
                  style={{ marginLeft: 5 }}
                  class="custom-control-label"
                  for="defaultUnchecked"
                >
                  Pacific
                </label>
              </div>
              <p>UTC-08:00</p>
            </li>
            <li>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultUnchecked"
                />
                <label
                  style={{ marginLeft: 5 }}
                  class="custom-control-label"
                  for="defaultUnchecked"
                >
                  Pacific
                </label>
              </div>
              <p>UTC-08:00</p>
            </li>
            <li>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultUnchecked"
                />
                <label
                  style={{ marginLeft: 5 }}
                  class="custom-control-label"
                  for="defaultUnchecked"
                >
                  Pacific
                </label>
              </div>
              <p>UTC-08:00</p>
            </li>
            <li>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultUnchecked"
                />
                <label
                  style={{ marginLeft: 5 }}
                  class="custom-control-label"
                  for="defaultUnchecked"
                >
                  Pacific
                </label>
              </div>
              <p>UTC-08:00</p>
            </li>
            <li>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultUnchecked"
                />
                <label
                  style={{ marginLeft: 5 }}
                  class="custom-control-label"
                  for="defaultUnchecked"
                >
                  Pacific
                </label>
              </div>
              <p>UTC-08:00</p>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default TimezoneSettings;
