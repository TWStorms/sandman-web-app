import React from "react";
import { Link } from "react-router-dom";
// STYLES
import "./styles.css";
// ICONS
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundImage: "url(./images/footer-bg.jpg)" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h3>COMPANY</h3>
          </div>
          <div className="col-lg-3">
            <h3>Open hour</h3>
            <p>
              Monday 11am-7pm
              <br />
              Tuesday-Friday 11am-8pm
              <br />
              Saturday 10am-6pm
              <br />
              Sunday 11am-6pm
            </p>
          </div>
          <div className="col-lg-3">
            <h3>RESOURCES</h3>
          </div>
          <div className="col-lg-3">
            <img
              src="./images/ft-logo.png"
              style={{
                width: 260,
              }}
              alt=""
              className="mb-3"
            />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <ul className="social-icons list-unstyled">
              <li>
                <Link to="/dashboard">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <FaDribbble />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>© 2021, Sandman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
