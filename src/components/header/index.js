import { useState } from "react";
// ICONS
import { FaBars } from "react-icons/fa";
// STYLES
import "./styles.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="bg-dark py-3">
      <div className="container d-flex justify-content-between align-items-center ">
        <a href="/">
          <img src="/images/logo.png" alt="Logo" />
        </a>
        <nav className="d-lg-block d-none ml-auto">
          <ul className="list-unstyled d-flex align-items-center mb-0">
            <li className="d-flex align-items-center">
              <a
                className="px-2 text-decoration-none"
                style={{
                  color: "red",
                }}
                href="#home"
              >
                HOME
              </a>
            </li>
            <li className="d-flex align-items-center">
              <a className="text-white px-2 text-decoration-none" href="#clock">
                CLOCK
              </a>
            </li>
            <li className="d-flex align-items-center">
              <a className="text-white px-2 text-decoration-none " href="#home">
                ACCESSORIES
              </a>
            </li>
            <li className="d-flex align-items-center">
              <a className="text-white px-2 text-decoration-none " href="#home">
                MERCH
              </a>
            </li>
            <li className="d-flex align-items-center">
              <a className="text-white px-2 text-decoration-none " href="#home">
                NEWS
              </a>
            </li>
            <li className="d-flex align-items-center">
              <a className="text-white px-2 text-decoration-none " href="#home">
                SUPPORT
              </a>
            </li>
            <li className="d-flex align-items-center">
              <a className="text-white px-2 text-decoration-none " href="#home">
                ABOUT
              </a>
            </li>
          </ul>
        </nav>
        <nav className="d-lg-none d-block ml-auto">
          <div onClick={() => setToggle(true)}>
            <FaBars
              className="fas fa-bars"
              style={{
                color: "white",
                fontSize: "24px",
                marginLeft: "60px",
                textAlign: "right",
                alignSelf: "flex-end",
              }}
            />
          </div>
        </nav>
        <section className={toggle ? "nav--open nav" : "nav"}>
          <div className="nav__links bg-dark h-100">
            <div className="logo-img">
              <a href="/" className="">
                <img src="/images/logo.png" alt="Logo" />
              </a>
            </div>
            <a href="#home_links" className="nav__link">
              HOME
            </a>
            <a className="nav__link nav__link--active" href="#home_links">
              CLOCK
            </a>
            <a className="nav__link" href="#home_links">
              ACCESSORIES
            </a>
            <a className="nav__link" href="#home_links">
              MERCH
            </a>
            <a className="nav__link" href="#home_links">
              NEWS
            </a>
            <a className="nav__link" href="#home_links">
              SUPPORT
            </a>
            <a className="nav__link" href="#home_links">
              ABOUT
            </a>
          </div>
          <div className="nav__overlay" onClick={() => setToggle(false)}></div>
        </section>
      </div>
    </header>
  );
};

export default Header;
