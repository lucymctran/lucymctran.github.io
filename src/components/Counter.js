import React from "react";

const Counter = () => {
  return (
    <div className="colorlib-narrow-content">
      <div className="row">
        <div className="col-md-12">
          <div
            className="row row-bottom-padded-sm animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="col-md-12">
              <div className="about-desc">
                <h2 className="text-center">FUN FACT</h2>
                <span className="heading-meta text-center">I have over...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="colorlib-counter"
        className="colorlib-counters"
        style={{
          backgroundImage: "url(./assets/images/healthcare-worker.jpg)",
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="colorlib-narrow-content">
          <div className="row"></div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center animate-box">
            <span
              className="colorlib-counter js-counter"
              data-from="100"
              data-to="6000"
              data-speed="5000"
              data-refresh-interval="50"
            ></span>
            <span className="colorlib-counter-label">
              Hours of Patient care experience
            </span>
          </div>
          {/* <div className="col-md-6 text-center animate-box">
            <span
              className="colorlib-counter js-counter"
              data-from="0"
              data-to="10"
              data-speed="5000"
              data-refresh-interval="50"
            ></span>
            <span className="colorlib-counter-label">Projects</span>
          </div> */}
          {/* <div className="col-md-3 text-center animate-box">
                  <span className="colorlib-counter js-counter" data-from="0" data-to="30" data-speed="5000" data-refresh-interval="50"></span>
                  <span className="colorlib-counter-label">Clients</span>
              </div>
              <div className="col-md-3 text-center animate-box">
                  <span className="colorlib-counter js-counter" data-from="0" data-to="10" data-speed="5000" data-refresh-interval="50"></span>
                  <span className="colorlib-counter-label">Partners</span>
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default Counter;
