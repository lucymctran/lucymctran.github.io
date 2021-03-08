import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const NavBar = (props) => {
  return (
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
          <span className="position">Web Developer in Southern California</span>
        </div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              <li className="active">
                <a href="#" data-nav-section="home">
                  {props.tab1}
                </a>
              </li>
              <li>
                <a href="#" data-nav-section="about">
                  {props.tab2}
                </a>
              </li>
              <li>
                <a href="#" data-nav-section="experience">
                  {props.tab3}
                </a>
              </li>
              <li>
                <a href="#" data-nav-section="education">
                  {props.tab4}
                </a>
              </li>
              <li>
                <a href="#" data-nav-section="services">
                  {props.tab5}
                </a>
              </li>
              <li>
                <a href="#" data-nav-section="work">
                  {props.tab6}
                </a>
              </li>
              <li>
                <a href="#" data-nav-section="blog">
                  {props.tab7}
                </a>
              </li>
              <li>
                <a href="#" data-nav-section="contact">
                  {props.tab8}
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="colorlib-footer">
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

        <div className="my-footer">
          <p>
            <small>
              {/* &copy; Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{" "}
              <i className="icon-heart" aria-hidden="true"></i> by{" "}
              <a className="footer" href="https://colorlib.com" target="_blank">
                Colorlib
              </a> */}
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
        </div>
      </aside>
    </span>
  );
};

export default NavBar;
