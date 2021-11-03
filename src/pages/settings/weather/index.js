import React from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
// COMPONENTS
import Header from "../../../components/header";
import BuyNow from "../../../components/buyNowSection";
import Carousel from "../../../components/carousel";
import Footer from "../../../components/footer";
import Input from "../../../components/input";
// ICONS
import { FaArrowLeft, FaCheck } from "react-icons/fa";
// STYLES
import "../styles.css";

const Weather = () => {
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
            <h2 class="text-left">SELECT TIMEZONE</h2>
            <label class="custom-label mb-4">SET LOCATION</label>
            <Input type="text" placeHolder="Zip/postal code" />
            <label class="custom-label mb-4">DISPLAY MODE</label>
            <ul>
              <li>
                <label class="custom-radio">
                  <div>
                    <p>
                      <FaCheck /> Forecasted High (*F)
                    </p>
                  </div>
                </label>
              </li>
              <li>
                <label class="custom-radio">
                  <div>
                    <p>
                      <FaCheck /> Forecasted High (*C)
                    </p>
                  </div>
                </label>
              </li>
              <li>
                <label class="custom-radio">
                  <div>
                    <p>
                      <FaCheck /> Off
                    </p>
                  </div>
                </label>
              </li>
            </ul>

            <p class="large-text mt-4">
              Each morning before you wake up, the Droppler will estimate the
              high for the day so you can plan ahead.
              <br />
              <br />
              Real-time weather is currently not available.
            </p>
            <div class="text-center  mt-5">
              <p class="large-text">Wakeup time: 3:00 AM</p>
              <button class="submit-btn">Set Wakeup Time</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Weather;
