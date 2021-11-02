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
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const history = useHistory();

  // const handleLogin = async () => {
  //   // console.log(email, password);
  //   // let item = { email, password, applicationId };
  //   await fetch("https://api.sandmandoppler.bycopilot.com/v4/auth/login", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     mode: "no-cors",
  //     body: JSON.stringify({
  //       authenticationDetails: {
  //         applicationId: "SANDMANDOPPLER",
  //         email: email,
  //         password: password,
  //       },
  //       deviceDetails: {
  //         applicationVersion: "154",
  //         deviceId: "12345678",
  //         deviceModel: "PIXEL",
  //         deviceType: "PHONE",
  //         osType: "ANDROID",
  //         osVersion: "9",
  //         timezone: {
  //           currentTimeInClientInMilliseconds: 0,
  //           offsetFromUTCInMilliseconds: 0,
  //           timeZoneId: "UTC",
  //         },
  //       },
  //     }),
  //   })
  //     // .then((response) => response.json())
  //     .then(async (json) => {
  //       console.log(json);
  //     });
  //   // response = await response.json();
  //   // console.warn(response);
  //   // localStorage.setItem(JSON.stringify(response));
  //   // history.push("/dashboard");
  // };

  // const routeChange = () => {
  //   let path = `dashboard`;
  //   history.push(path);
  // };

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

          {/* <form> */}
          <Input
            placeHolder="Email"
            type="text"
            // onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeHolder="Password"
            type="password"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <div class="text-right">
            <a href="#" class="text-right underline">
              Forgot Password
            </a>
          </div>
          <div class="text-center">
            <button
              class="submit-btn"
              // onClick={handleLogin}
            >
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
          {/* </form> */}
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Login;
