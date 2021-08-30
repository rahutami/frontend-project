import React from "react";
import "./style.css";

const Sunnyside = () => {
  return (
    <React.Fragment>
      <div className="home">
        <nav>
          <a href="#" className="logo">
            <img src="./images/logo.svg" alt="Sunnyside logo" />
          </a>
          <div className="links desktop">
            <a href="#" className="about">
              About
            </a>
            <a href="#" className="services">
              Services
            </a>
            <a href="#" className="project">
              Projects
            </a>
            <button className="contact-btn">Contact</button>
          </div>
          <div className="links mobile">
            <img src="./images/icon-hamburger.svg" alt="" />
          </div>
        </nav>
        <h1>We are creatives</h1>
        <img
          src="./images/icon-arrow-down.svg"
          alt="arrow down"
          className="arrow-down"
        />
      </div>

      <div className="grids">
        <div className="grid-item transform">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="#">Learn more</a>
        </div>
        <div className="grid-item transform-img"></div>
        <div className="grid-item standout-img"></div>
        <div className="grid-item standout">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="#">Learn more</a>
        </div>
        <div className="grid-item graphic">
          <div className="description">
            <h2>Graphic design</h2>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>
        <div className="grid-item photography">
          <div className="description">
            <h2>Photography</h2>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <div className="container">
          <h1>Client testimonials</h1>
          <div className="clients">
            <div className="testimony">
              <img
                className="client-img"
                src="./images/image-emily.jpg"
                alt=""
              />

              <p className="review">
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>

              <h3 className="client-name">Emily R.</h3>
              <h4 className="client-job">Marketing Director</h4>
            </div>

            <div className="testimony">
              <img
                className="client-img"
                src="./images/image-thomas.jpg"
                alt=""
              />
              <p className="review">
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
              <h3 className="client-name">Thomas S.</h3>
              <h4 className="client-job">Chief Operating Officer</h4>
            </div>

            <div className="testimony">
              <img
                className="client-img"
                src="./images/image-jennie.jpg"
                alt=""
              />
              <p className="review">
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
              <h3 className="client-name">Jennie F.</h3>
              <h4 className="client-job">Business Owner</h4>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-imgs">
          <div className="footer-img bottle"></div>

          <div className="footer-img orange"></div>

          <div className="footer-img cone"></div>

          <div className="footer-img sugar"></div>
        </div>
        <div className="footer">
          <div className="footer-logo">
            <img src="./images/logo.svg" alt="sunnyside logo" />
          </div>
          <div className="links">
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Projects</a>
          </div>
          <div className="social-medias">
            <div className="social-media facebook">
              <img src="./images/icon-facebook.svg" alt="facebook logo" />
            </div>
            <div className="social-media instagram">
              <img src="./images/icon-instagram.svg" alt="instagram logo" />
            </div>
            <div className="social-media twitter">
              <img src="./images/icon-twitter.svg" alt="twitter logo" />
            </div>
            <div className="social-media pinterest">
              <img src="./images/icon-pinterest.svg" alt="twitter logo" />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Sunnyside;
