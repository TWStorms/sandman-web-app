import React from "react";
// COMPONENTS
import Header from "../../components/header";
import BuyNow from "../../components/buyNowSection";
import Carousel from "../../components/carousel";
import Footer from "../../components/footer";
// ICONS
import { FaArrowLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
// STYLES
import "./styles.css";

const index = () => {
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
            <h2 class="text-left">SETTINGS</h2>
            <p class="mb-3">Default Thing</p>
            <ul class="settings-links">
              <li>
                <a href="/dopplerInfo">
                  Doppler Information <FaAngleRight />
                </a>
              </li>
              <li>
                <a href="/wifi">
                  Wifi <FaAngleRight />
                </a>
              </li>
              <li>
                <a href="/brightness">
                  Brightness <FaAngleRight />
                </a>
              </li>
              <li>
                <a href="/dopplerColor">
                  Doppler colors <FaAngleRight />
                </a>
              </li>
              <li>
                <a href="#">
                  Audio settings <FaAngleRight />
                </a>
              </li>
              <li>
                <a href="#">
                  Edit Doppler name <FaAngleRight />
                </a>
              </li>
              <li>
                <a href="#">
                  Wheather <FaAngleRight />
                </a>
              </li>
              <li>
                <a href="#">
                  Time settings <FaAngleRight />
                </a>
              </li>
              <li>
                <a href="/amazonLogin">
                  Sign in to Amazon Alexa <FaAngleRight />
                </a>
              </li>
            </ul>
            <a href="#" class="white-btn blue-btn mt-5">
              Remove Device
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default index;
