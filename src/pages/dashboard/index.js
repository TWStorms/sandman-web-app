import React from "react";
// components
import Header from "../../components/header";
import BuyNow from "../../components/buyNowSection";
import Carousel from "../../components/carousel";
import Footer from "../../components/footer";
import { FaCog } from "react-icons/fa";
// style
import "./styles.css";

const index = () => {
  return (
    <div className="">
      <Header />
      <BuyNow />
      <Carousel />
      <section
        class="login-bg dashboard p-1"
        style={{ backgroundImage: "url(./images/login-bg.jpg)" }}
      >
        <div class="container">
          <ul class="dashboard-menu">
            <li>
              <a href="#">HS Experts</a>
              <p>dev@hsexperts.com</p>
            </li>
            <li>
              <a href="#">SUPPORT & FEEDBACK</a>
            </li>
            <li>
              <a href="#">ADD NEW DOPPLER</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">TERMS AND CONDISTIONS</a>
            </li>
            <li>
              <a href="#">MANUAL</a>
            </li>
            <li>
              <a href="/amazonLogin">AMAZON ALEXA APP</a>
            </li>
            <li>
              <a href="/settings">
                <FaCog style={{ marginRight: 10 }} />
                SETTINGS
              </a>
            </li>
            <li>
              <a href="#">LOG OUT</a>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default index;
