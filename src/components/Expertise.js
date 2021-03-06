import React from "react";

const Expertise = () => {
  return (
    <section className="colorlib-services" data-section="services">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">What I do?</span>
            <h2 className="colorlib-heading">My expertise</h2>
          </div>
        </div>
        <div className="row row-pt-md">
          <div className="col-md-4 text-center animate-box">
            <div className="services color-1">
              <span className="icon">
                <i className="icon-layers2"></i>
              </span>
              <div className="desc">
                <h3>React</h3>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-2">
              <span className="icon">
                <i className="icon-layers2"></i>
              </span>
              <div className="desc">
                <h3>Javascript</h3>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-3">
              <span className="icon">
                <i className="icon-data"></i>
              </span>
              <div className="desc">
                <h3>Node.js</h3>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-4">
              <span className="icon">
                <i className="icon-data"></i>
              </span>
              <div className="desc">
                <h3>Express</h3>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-5">
              <span className="icon">
                <i className="icon-data"></i>
              </span>
              <div className="desc">
                <h3>SQL</h3>
                <p></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center animate-box">
            <div className="services color-6">
              <span className="icon">
                <i className="icon-data"></i>
              </span>
              <div className="desc">
                <h3>MongoDB</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
