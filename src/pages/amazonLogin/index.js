import React from "react";
// componets
import Header from "../../components/header";
import BuyNow from "../../components/buyNowSection";
import Carousel from "../../components/carousel";
import Footer from "../../components/footer";
// styles
import "./styles.css";

const AmazonLogin = () => {
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
          <div class="text-center mb-4">
            <img
              src="./images/amazon.png"
              style={{ width: "40%", height: 250 }}
              resizeMode="contain"
              alt=""
            />
          </div>
          <h2>CONNECT TO ALEXA</h2>
          <p class="large-text text-center">
            You can talk to Amazon Alexa on your Sandman Doppler. With Alexa,
            you can ask to play music, hear the news, check weather, control
            smart home devices, and more. Alexa lives in the cloud, so it's
            always getting smarter, adding new capabilities that are delivered
            to your device automatically.
          </p>
          <div class="text-center mt-5">
            <button class="submit-btn">SIGN IN WITH AMAZON</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AmazonLogin;
