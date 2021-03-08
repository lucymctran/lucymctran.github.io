import React from "react";

const Experience = () => {
  return (
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
                  <div className="timeline-icon color-4">
                    <i className="icon-pen2"></i>
                  </div>

                  <div className="timeline-label">
                    <h2>
                      <a href="#">Frontend Developer at Expresso Inc</a>{" "}
                      <span>January 2020 - Current</span>
                    </h2>
                    <p>
                      Collaborated with the startup by designing the Expresso
                      website using React and Node.js in preparation for the
                      launch
                    </p>
                    <p>
                      Involved with updating the Expresso website by managing
                      git pulls and pushes as well as troubleshooting git bugs
                      on Github
                    </p>
                  </div>
                </div>
              </article>
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
                      <a href="#">Medical Assistant at Opthalmology Office</a>{" "}
                      <span>June 2018 - Current</span>
                    </h2>
                    <p>
                      Handle front office duties, which includes verifying
                      medical and vision insurances, authorizing tests for
                      pre-tests and surgeries, answering phone calls, scheduling
                      appointments, and checking patients in and out of the
                      office
                    </p>
                    <p>
                      Handle back office duties, which includes rooming
                      patients, reviewing oral and eye medications, and testing
                      patient’s visual acuity
                    </p>
                    <p>
                      Perform pretests such as testing the visual field,
                      capturing images of retina using OCT, and dilating
                      patients’ eyes
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
                      <a href="#">
                        Assistant Director of Administration for COPE Health
                        Scholar Program
                      </a>{" "}
                      <span>2017-2019</span>
                    </h2>
                    <p>
                      Oversee Administrative Coordinators of Leadership Team in
                      maintaining Health Scholar records by requesting weekly
                      updates, assigning tasks such as file audits and input
                      incoming records, and making sure deadlines are met
                    </p>
                    <p>
                      Assist with Health scholar orientation, interviews, and
                      clearance appointments in order to ensure Health Scholars'
                      success at the St. Mary Medical Center
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
                      <a href="#">
                        Medical Assistant at Internal Medicine Office
                      </a>{" "}
                      <span>2016-2017</span>
                    </h2>
                    <p>
                      Handled front office duties, which includes scheduling
                      appointments, confirming medications with pharmacy,
                      checking insurance, checking patient in and out of the
                      office, updating medical records and organizing charts,
                      skimming through lab results
                    </p>
                    <p>
                      Handled back office duties, which includes rooming
                      patients, taking vitals and medical history, confirming
                      medications with patients, giving B12 shots, run urine dip
                      tests, send throat cultures, and performing EKGs and ear
                      lavages
                    </p>
                  </div>
                </div>
              </article>

              {/* <article
                className="timeline-entry animate-box"
                data-animate-effect="fadeInTop"
              >
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-4">
                    <i className="icon-pen2"></i>
                  </div>
                  <div className="timeline-label">
                    <h2>
                      <a href="#">Helping the Homeless</a>{" "}
                      <span>2018-Current</span>
                    </h2>
                    <p>
                      Attend a various events that involve assisting the
                      homeless such as providing meals and distributing donated
                      items. Events include Clothing The Homeless and Mary's
                      Kitchen
                    </p>
                  </div>
                </div>
              </article> */}

              {/* <article
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
              </article> */}

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
  );
};

export default Experience;
