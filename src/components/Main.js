import React from "react";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import About from "./About";
import Expertise from "./Expertise";
import Counter from "./Counter";
import Resume from "./Resume";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = () => {
  return (
    <div id="colorlib-page">
      <div className="container-wrap">
        <NavBar
          tab1="Home"
          tab2="About"
          tab3="Experience"
          tab4=""
          tab5="Expertise"
          tab6="Projects"
          tab7=""
          tab8="Contact"
        />
        <div id="colorlib-main">
          <Welcome />
          <About />
          <Counter />
          <Experience />
          <Expertise />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Main;
