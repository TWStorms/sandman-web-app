import "./styles.css";

const Footer = () => {
  return (
    <footer style={{ backgroundImage: "url(./images/footer-bg.jpg)" }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <h3>COMPANY</h3>
          </div>
          <div class="col-lg-3">
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
          <div class="col-lg-3">
            <h3>RESOURCES</h3>
          </div>
          <div class="col-lg-3">
            <img src="./images/ft-logo.png" alt="" class="mb-3" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <ul class="social-icons list-unstyled">
              <li>
                <a href="#" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p>© 2021, Sandman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
