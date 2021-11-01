import React, { useState, useEffect, useContext } from "react";
import { Route, Link, useHistory } from "react-router-dom";
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

const Login = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = `dashboard`;
    history.push(path);
  };
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
            <Input placeHolder="Email" type="text" />
            <Input placeHolder="Password" type="password" />
            <div class="text-right">
              <a href="#" class="text-right underline">
                Forgot Password
              </a>
            </div>
            <div class="text-center">
              <button class="submit-btn" onClick={routeChange}>
                LOG IN
              </button>
            </div>
            <p class="create-account text-center mb-2">
              New to Doppler?{" "}
              <Route>
                <Link to="/signup" loading>
                  Create an account
                </Link>
              </Route>
              {/* <a href="/signup" class="underline">
                Create an Account
              </a> */}
            </p>
            <p class="text-center">Version 1.3.9</p>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Login;
