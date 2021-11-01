import React from "react";
import { Link } from "react-router-dom";
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
// components
import Header from "../../components/header";
import Footer from "../../components/footer";
import BuyNow from "../../components/buyNowSection";
import Carousel from "../../components/carousel";
import Input from "../../components/input";

function index() {
  return (
    <div>
      <Header />
      <BuyNow />
      <Carousel />
      <section
        class="login-bg"
        style={{ backgroundImage: "url(./images/login-bg.jpg)" }}
      >
        <div class="container container-sm">
          <h2>LOG IN</h2>
          <form>
            <Input placeHolder="Full Name" type="text" />
            <Input placeHolder="Email" type="text" />
            <Input placeHolder="Password" type="password" />
            {/* <div class="text-right">
              <a href="#" class="text-right underline">
                Forgot Password
              </a>
            </div> */}
            <div class="text-center">
              <button class="submit-btn">Create</button>
            </div>
            <p class="create-account text-center mb-2">
              Alreday have an account?{" "}
              <Link to="/login" class="underline">
                login
              </Link>
            </p>
            <p class="text-center">Version 1.3.9</p>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default index;
