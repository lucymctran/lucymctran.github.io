import React from "react";

const Work = () => {
  return (
    <section className="colorlib-work" data-section="work">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">My Work</span>
            <h2 className="colorlib-heading animate-box">Recent Projects</h2>
          </div>
        </div>
        {/* <div
          className="row row-bottom-padded-sm animate-box"
          data-animate-effect="fadeInLeft"
        >
          <div className="col-md-12">
            <p className="work-menu">
              <span>
                <a href="#" className="active">
                  Graphic Design
                </a>
              </span>{" "}
              <span>
                <a href="#">Web Design</a>
              </span>{" "}
              <span>
                <a href="#">Software</a>
              </span>{" "}
              <span>
                <a href="#">Apps</a>
              </span>
            </p>
          </div>
        </div> */}
        <div className="row">
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div
              className="project"
              style={{
                backgroundImage: "url(./assets/images/harry-potter.jpg)",
              }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="work.html" target="_blank">
                      Harry Potter Quiz
                    </a>
                  </h3>
                  <span>Quiz</span>
                  {/* <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye"></i> 100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart"></i> 49
                      </a>
                    </span>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div
              className="project"
              style={{
                backgroundImage: "url(./assets/images/to-do.jpg)",
              }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a
                      href="https://to-do-list101.herokuapp.com/"
                      target="_blank"
                    >
                      To-Do List
                    </a>
                  </h3>
                  <span>Heroku-Deployed App</span>
                  {/* <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye"></i> 100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart"></i> 49
                      </a>
                    </span>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div
              className="project"
              style={{
                backgroundImage: "url(./assets/images/flashcard.jpg)",
              }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a
                      href="https://to-do-list101.herokuapp.com/"
                      target="_blank"
                    >
                      Flash Cards
                    </a>
                  </h3>
                  <span>Your own study cards</span>
                  {/* <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye"></i> 100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart"></i> 49
                      </a>
                    </span>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 animate-box"
            data-animate-effect="fadeInRight"
          >
            <div
              className="project"
              style={{
                backgroundImage: "url(./assets/images/coming-soon.jpg)",
              }}
            >
              <div className="desc">
                <div className="con">
                  <h3>
                    <a href="">Coming-Soon</a>
                  </h3>
                  <span></span>
                  {/* <p className="icon">
                    <span>
                      <a href="#">
                        <i className="icon-share3"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-eye"></i> 100
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i className="icon-heart"></i> 49
                      </a>
                    </span>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-md-12 animate-box">
            <p>
              <a href="#" className="btn btn-primary btn-lg btn-load-more">
                Load more <i className="icon-reload"></i>
              </a>
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Work;
