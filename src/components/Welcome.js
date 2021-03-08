import React from "react";
import NavBar from "./NavBar";

const Welcome = (props) => {
  return (
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <ul className="slides">
          <li
            style={{
              backgroundImage: "url(./assets/images/img_bg_1.jpeg)",
            }}
          >
            <div className="overlay"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner js-fullheight">
                    <div className="desc">
                      <h1>
                        Hi,
                        <br /> I'm Lucy!
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            style={{
              backgroundImage: "url(./assets/images/img_bg_1.jpeg)",
            }}
          >
            <div className="overlay"></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                  <div className="slider-text-inner">
                    <div className="desc">
                      <h1>
                        <br />
                        Welcome!
                      </h1>
                      <h2>Check out my work!</h2>
                      <div id="navbar">
                        <p>
                          <a
                            href="#"
                            data-nav-section="about"
                            className="btn btn-primary btn-learn active"
                          >
                            View Portfolio
                            <i className="icon-briefcase3"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Welcome;
