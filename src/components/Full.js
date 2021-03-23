import React from "react";

const FullWebsite = () => {
  <span>
    <a
      href="#"
      className="js-colorlib-nav-toggle colorlib-nav-toggle"
      data-toggle="collapse"
      data-target="#navbar"
      aria-expanded="false"
      aria-controls="navbar"
    >
      <i></i>
    </a>
    <aside id="colorlib-aside" role="complementary" className="js-fullheight">
      <div className="text-center">
        <div
          className="author-img"
          style={{ backgroundImage: "url(./assets/images/about.jpg)" }}
        ></div>
        <h1 id="colorlib-logo">
          <a href="index.html">Lucy Tran</a>
        </h1>
        <span className="position">Native in Southern California</span>
      </div>
      <nav id="colorlib-main-menu" role="navigation" className="navbar">
        <div id="navbar" className="collapse">
          <ul>
            <li className="active">
              <a href="#" data-nav-section="home">
                Home
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="about">
                About
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="services">
                Services
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="education">
                Education
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="experience">
                Experience
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="work">
                Work
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="blog">
                Blog
              </a>
            </li>
            <li>
              <a href="#" data-nav-section="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="colorlib-footer">
        <p>
          <small>
            &copy; Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | This template is made with{" "}
            <i className="icon-heart" aria-hidden="true"></i> by{" "}
            <a className="footer" href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
            <span>
              Images from{" "}
              <a
                className="footer"
                href="https://unsplash.com/"
                target="_blank"
              >
                Unsplash.com
              </a>
            </span>
          </small>
        </p>
        <ul>
          <li>
            <a href="https://github.com/lucymctran" target="_blank">
              <i className="icon-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lucymctran" target="_blank">
              <i className="icon-linkedin2"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    /////////////
    <div id="colorlib-main">
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
                backgroundImage: "url(./assets/images/img_bg_2.jpeg)",
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
                        <p>
                          <a className="btn btn-primary btn-learn">
                            View Portfolio {/* button doesn't work */}
                            <i className="icon-briefcase3"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      ////////////////
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
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>
                      <strong>Hi! My name is Lucy.</strong> I graduated from The
                      University of California, Irvine in 2016 with a degree in
                      Biological Sciences. I am currently exploring
                      opportunities in medicine and tech and would love to merge
                      those two passions together. I am currently working as a
                      medical assistant while learning how to code on my free
                      time. My philosophy is, in order to live life to the
                      fullest, you need to find ways to keep growing. You'll
                      often find me turning pages on a new book, exploring
                      different art mediums, or hashing out problems on
                      JavaScript.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
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
              </div>
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
      //////////
      <section className="colorlib-services" data-section="services">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">What I do?</span>
              <h2 className="colorlib-heading">
                Here are some of my expertise
              </h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-bulb"></i>
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
                  <i className="icon-data"></i>
                </span>
                <div className="desc">
                  <h3>Web design</h3>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-phone3"></i>
                </span>
                <div className="desc">
                  <h3>App development</h3>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-4">
                <span className="icon">
                  <i className="icon-layers2"></i>
                </span>
                <div className="desc">
                  <h3>Graphic Design</h3>
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
                  <h3>Software</h3>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-6">
                <span className="icon">
                  <i className="icon-phone3"></i>
                </span>
                <div className="desc">
                  <h3>Healthcare</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="colorlib-counter"
        className="colorlib-counters"
        style={{ backgroundImage: "url(./assets/images/cover_bg_1.jpeg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="colorlib-narrow-content">
          <div className="row"></div>
          <div className="row">
            <div className="col-md-6 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="5000"
                data-speed="5000"
                data-refresh-interval="50"
              ></span>
              <span className="colorlib-counter-label">
                Hours of Patient care experience
              </span>
            </div>
            <div className="col-md-6 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="10"
                data-speed="5000"
                data-refresh-interval="50"
              ></span>
              <span className="colorlib-counter-label">Projects</span>
            </div>
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
      {/* <section className="colorlib-skills" data-section="skills">
      <div className="colorlib-narrow-content">
          <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                  <span className="heading-meta">My Specialty</span>
                  <h2 className="colorlib-heading animate-box">My Skills</h2>
              </div>
          </div>
          <div className="row">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                  <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                  <div className="progress-wrap">
                      <h3>Photoshop</h3>
                      <div className="progress">
                           <div className="progress-bar color-1" role="progressbar" aria-valuenow="75"
                            aria-valuemin="0" aria-valuemax="100" style={{ width:"75%" }}>
                          <span>75%</span>
                            </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                      <h3>jQuery</h3>
                      <div className="progress">
                           <div className="progress-bar color-2" role="progressbar" aria-valuenow="60"
                            aria-valuemin="0" aria-valuemax="100" style={{ width:"60%" }}>
                          <span>60%</span>
                            </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                  <div className="progress-wrap">
                      <h3>HTML5</h3>
                      <div className="progress">
                           <div className="progress-bar color-3" role="progressbar" aria-valuenow="85"
                            aria-valuemin="0" aria-valuemax="100" style={{ width:"85%" }}>
                          <span>85%</span>
                            </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                      <h3>CSS3</h3>
                      <div className="progress">
                           <div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
                            aria-valuemin="0" aria-valuemax="100" style={{ width:"90%" }}>
                          <span>90%</span>
                            </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                  <div className="progress-wrap">
                      <h3>WordPress</h3>
                      <div className="progress">
                           <div className="progress-bar color-5" role="progressbar" aria-valuenow="70"
                            aria-valuemin="0" aria-valuemax="100" style={{ width:"70%" }}>
                          <span>70%</span>
                            </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                      <h3>SEO</h3>
                      <div className="progress">
                           <div className="progress-bar color-6" role="progressbar" aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100" style={{ width:"80%" }}>
                          <span>80%</span>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section> */}
      <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Education</span>
              <h2 className="colorlib-heading animate-box">Education</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="fancy-collapse-panel">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Bachelor Degree in Biological Sciences
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      className="panel-collapse collapse in"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-6">
                            <p>
                              Far far away, behind the word mountains, far from
                              the countries Vokalia and Consonantia, there live
                              the blind texts.{" "}
                            </p>
                          </div>
                          <div className="col-md-6">
                            <p>
                              Separated they live in Bookmarksgrove right at the
                              coast of the Semantics, a large language ocean.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingTwo">
                                  <h4 className="panel-title">
                                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Bachelor Degree of Computer Science
                                      </a>
                                  </h4>
                              </div>
                              <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                  <div className="panel-body">
                                      <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                          <ul>
                                              <li>Separated they live in Bookmarksgrove right</li>
                                              <li>Separated they live in Bookmarksgrove right</li>
                                          </ul>
                                  </div>
                              </div>
                          </div> */}
                  {/* <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingThree">
                                  <h4 className="panel-title">
                                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Diploma in Information Technology
                                      </a>
                                  </h4>
                              </div>
                              <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                  <div className="panel-body">
                                      <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
                                  </div>
                              </div>
                          </div>

                          <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingFour">
                                  <h4 className="panel-title">
                                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Diploma in Information Technology
                                      </a>
                                  </h4>
                              </div>
                              <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                  <div className="panel-body">
                                      <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
                                  </div>
                              </div>
                          </div> */}
                  {/* 
                          <div className="panel panel-default">
                              <div className="panel-heading" role="tab" id="headingFive">
                                  <h4 className="panel-title">
                                      <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">High School Secondary Education
                                      </a>
                                  </h4>
                              </div>
                              <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                                  <div className="panel-body">
                                      <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>	
                                  </div>
                              </div>
                          </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Experience</span>
              <h2 className="colorlib-heading animate-box">Work Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                      <i className="icon-pen2"></i>
                    </div>

                    <div className="timeline-label">
                      <h2>
                        <a href="#">Full Stack Developer</a>{" "}
                        <span>2017-2018</span>
                      </h2>
                      <p>
                        Tolerably earnestly middleton extremely distrusts she
                        boy now not. Add and offered prepare how cordial two
                        promise. Greatly who affixed suppose but enquire compact
                        prepare all put. Added forth chief trees but rooms think
                        may.
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-2">
                      <i className="icon-pen2"></i>
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="#">Front End Developer at Google Company</a>{" "}
                        <span>2017-2018</span>
                      </h2>
                      <p>
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic life One day
                        however a small line of blind text by the name of Lorem
                        Ipsum decided to leave for the far World of Grammar.
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <i className="icon-pen2"></i>
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="#">System Analyst</a> <span>2017-2018</span>
                      </h2>
                      <p>
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic life One day
                        however a small line of blind text by the name of Lorem
                        Ipsum decided to leave for the far World of Grammar.
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <i className="icon-pen2"></i>
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="#">Creative Designer</a> <span>2017-2018</span>
                      </h2>
                      <p>
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic life One day
                        however a small line of blind text by the name of Lorem
                        Ipsum decided to leave for the far World of Grammar.
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-pen2"></i>
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="#">UI/UX Designer at Envato</a>{" "}
                        <span>2017-2018</span>
                      </h2>
                      <p>
                        Even the all-powerful Pointing has no control about the
                        blind texts it is an almost unorthographic life One day
                        however a small line of blind text by the name of Lorem
                        Ipsum decided to leave for the far World of Grammar.
                      </p>
                    </div>
                  </div>
                </article>

                <article
                  className="timeline-entry begin animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none"></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="colorlib-work" data-section="work">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">My Work</span>
              <h2 className="colorlib-heading animate-box">Recent Work</h2>
            </div>
          </div>
          <div
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
          </div>
          <div className="row">
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div
                className="project"
                style={{
                  backgroundImage: "url(./assets/images/img-1.jpg)",
                }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">Work 01</a>
                    </h3>
                    <span>Website</span>
                    <p className="icon">
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
                    </p>
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
                  backgroundImage: "url(./assets/images/img-2.jpg)",
                }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">Work 02</a>
                    </h3>
                    <span>Animation</span>
                    <p className="icon">
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
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInTop"
            >
              <div
                className="project"
                style={{
                  backgroundImage: "url(./assets/images/img-3.jpg)",
                }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">Work 03</a>
                    </h3>
                    <span>Illustration</span>
                    <p className="icon">
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
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInBottom"
            >
              <div
                className="project"
                style={{
                  backgroundImage: "url(./assets/images/img-4.jpg)",
                }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">Work 04</a>
                    </h3>
                    <span>Application</span>
                    <p className="icon">
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
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div
                className="project"
                style={{
                  backgroundImage: "url(./assets/images/img-5.jpg)",
                }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">Work 05</a>
                    </h3>
                    <span>Graphic, Logo</span>
                    <p className="icon">
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
                    </p>
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
                  backgroundImage: "url(./assets/images/img-6.jpg)",
                }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">Work 06</a>
                    </h3>
                    <span>Web Design</span>
                    <p className="icon">
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
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box">
              <p>
                <a href="#" className="btn btn-primary btn-lg btn-load-more">
                  Load more <i className="icon-reload"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      ///////BLOG
      <section className="colorlib-blog" data-section="blog">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Read</span>
              <h2 className="colorlib-heading">Recent Blog</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-4 col-sm-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="blog-entry">
                <a href="blog.html" className="blog-img">
                  <img
                    src="./assets/images/blog-1.jpg"
                    className="img-responsive"
                    alt="HTML5 Bootstrap Template by colorlib.com"
                  />
                </a>
                <div className="desc">
                  <span>
                    <small>April 14, 2018 </small> | <small> Web Design </small>{" "}
                    |{" "}
                    <small>
                      {" "}
                      <i className="icon-bubble3"></i> 4
                    </small>
                  </span>
                  <h3>
                    <a href="blog.html">Renovating National Gallery</a>
                  </h3>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="blog-entry">
                <a href="blog.html" className="blog-img">
                  <img
                    src="./assets/images/blog-2.jpg"
                    className="img-responsive"
                    alt="HTML5 Bootstrap Template by colorlib.com"
                  />
                </a>
                <div className="desc">
                  <span>
                    <small>April 14, 2018 </small> | <small> Web Design </small>{" "}
                    |{" "}
                    <small>
                      {" "}
                      <i className="icon-bubble3"></i> 4
                    </small>
                  </span>
                  <h3>
                    <a href="blog.html">Wordpress for a Beginner</a>
                  </h3>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="blog-entry">
                <a href="blog.html" className="blog-img">
                  <img
                    src="./assets/images/blog-3.jpg"
                    className="img-responsive"
                    alt="HTML5 Bootstrap Template by colorlib.com"
                  />
                </a>
                <div className="desc">
                  <span>
                    <small>April 14, 2018 </small> |{" "}
                    <small> Inspiration </small> |{" "}
                    <small>
                      {" "}
                      <i className="icon-bubble3"></i> 4
                    </small>
                  </span>
                  <h3>
                    <a href="blog.html">Make website from scratch</a>
                  </h3>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box">
              <p>
                <a href="#" className="btn btn-primary btn-lg btn-load-more">
                  Load more <i className="icon-reload"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      ////CONTACT
      <section className="colorlib-contact" data-section="contact">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Get in Touch</span>
              <h2 className="colorlib-heading">Contact</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i className="icon-globe-outline"></i>
                </div>
                <div className="colorlib-text">
                  <p>
                    <a href="#">lucymctran@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                      <div className="colorlib-icon">
                          <i className="icon-map"></i>
                      </div>
                      <div className="colorlib-text">
                          <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                      </div>
                  </div> */}

              {/* <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                      <div className="colorlib-icon">
                          <i className="icon-phone"></i>
                      </div>
                      <div className="colorlib-text">
                          <p><a href="tel://">+123 456 7890</a></p>
                      </div>
                  </div> */}
            </div>
            <div className="col-md-7 col-md-push-1">
              <div className="row">
                <div
                  className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <form action="">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name=""
                        id="message"
                        cols="30"
                        rows="7"
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-primary btn-send-message"
                        value="Send Message"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </span>;
};