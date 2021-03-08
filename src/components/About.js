import React from "react";

const About = () => {
  return (
    <section className="colorlib-about" data-section="about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12">
            <div
              className="row row-bottom-padded-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="col-md-12">
                <div className="about-desc">
                  <span className="heading-meta">About Me</span>
                  <h2 className="colorlib-heading">Get To Know Me</h2>
                  <p>
                    <strong>Hi! My name is Lucy.</strong> I graduated from The
                    University of California, Irvine in 2016 with a degree in
                    Biological Sciences. I am currently exploring opportunities
                    in medicine and tech and have been enjoying the journey so
                    far. My philosophy is, in order to live life to the fullest,
                    you need to find ways to keep growing. That is why I will
                    never stop learning. It is the greatest joy life can offer.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div
                className="col-md-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="services color-1">
                  <span className="icon2">
                    <i className="icon-bulb"></i>
                  </span>
                  <h3>Healthcare</h3>
                </div>
              </div>
              <div
                className="col-md-3 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="services color-2">
                  <span className="icon2">
                    <i className="icon-globe-outline"></i>
                  </span>
                  <h3>Web Design</h3>
                </div>
              </div>
              <div
                className="col-md-3 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div className="services color-3">
                  <span className="icon2">
                    <i className="icon-data"></i>
                  </span>
                  <h3>Software</h3>
                </div>
              </div>
              <div
                className="col-md-3 animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div className="services color-4">
                  <span className="icon2">
                    <i className="icon-phone3"></i>
                  </span>
                  <h3>Artist</h3>
                </div>
              </div>
            </div> */}
            {/* <div className="row">
                      <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                          <div className="hire">
                              <h2>I am happy to know you <br />that 300+ projects done sucessfully!</h2>
                              <a href="#" className="btn-hire">Hire me</a>
                          </div>
                      </div>
                  </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
