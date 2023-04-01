import React from "react";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";
import MovingText from 'react-moving-text'

const Intro4 = ({ sliderRef, blackStar }) => {
  return (
    <header ref={sliderRef} className="particles circle-bg valign" style={{marginBottom:"10px"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
            <MovingText
              type="bounce"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="5"
              fillMode="none">
              <h1>
                Influence Media
              </h1>
            </MovingText>
            <MovingText
              type="popIn"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="5"
              fillMode="none">
              <h2><span className="color-font">Modern Media Conglomerate.</span></h2>
            </MovingText>
            </div>
          </div>
        </div>
      </div>

      <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      />

        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro4;
