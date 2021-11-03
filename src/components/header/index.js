import { useState } from "react";
// ICONS
import { FaBars } from "react-icons/fa";
// STYLES
import "./styles.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="bg-dark py-3">
      <div class="container d-flex justify-content-between align-items-center ">
        <a href="/">
          <img src="/images/logo.png" alt="Logo" />
        </a>
        <nav className="d-lg-block d-none ml-auto">
          <ul className="list-unstyled d-flex align-items-center mb-0">
            <li className="d-flex align-items-center">
              <a
                className="text-white px-2 text-decoration-none active"
                class="active"
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
              <a className="text-white px-2 text-decoration-none " href="#">
                ACCESSORIES
              </a>
            </li>
            <li className="d-flex align-items-center">
              <a className="text-white px-2 text-decoration-none " href="#">
                MERCH
              </a>
            </li>
            <li className="d-flex align-items-center">
              <a className="text-white px-2 text-decoration-none " href="#">
                NEWS
              </a>
            </li>
            <li className="d-flex align-items-center">
              <a className="text-white px-2 text-decoration-none " href="#">
                SUPPORT
              </a>
            </li>
            <li className="d-flex align-items-center">
              <a className="text-white px-2 text-decoration-none " href="#">
                ABOUT
              </a>
            </li>
          </ul>
        </nav>
        <nav className="d-lg-none d-block ml-auto">
          <div onClick={() => setToggle(true)}>
            <FaBars
              class="fas fa-bars"
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
        <section className="nav" className={toggle ? "nav--open " : ""}>
          <div class="nav__links bg-dark h-100">
            <div className="logo-img">
              <a href="/" className="">
                <img src="/images/logo.png" alt="Logo" />
              </a>
            </div>
            <a href="#" class="nav__link">
              HOME
            </a>
            <a class="nav__link nav__link--active" href="#">
              CLOCK
            </a>
            <a class="nav__link" href="#">
              ACCESSORIES
            </a>
            <a class="nav__link" href="#">
              MERCH
            </a>
            <a class="nav__link" href="#">
              NEWS
            </a>
            <a class="nav__link" href="#">
              SUPPORT
            </a>
            <a class="nav__link" href="#">
              ABOUT
            </a>
          </div>
          <div class="nav__overlay " onClick={() => setToggle(false)}></div>
        </section>
      </div>
    </header>
  );
};

export default Header;
