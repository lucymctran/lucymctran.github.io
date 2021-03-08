import React from "react";
import Particles from "react-tsparticles";
import options from "./helper/options";
import Main from "./components/Main";
import "./components/App.css";

export default () => {
  return (
    <div>
      <div id="tsparticles">
        <Particles options={options} />
      </div>
      <Main />
    </div>
  );
};
