import React from "react";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";
import MovingText from 'react-moving-text'
import CustomButton from "../Custom-Design/custom-button";


const Intro4 = (props) => {
  const { sliderRef, blackStar,showContent,setShowContent,cr } = props

  const handleClick = () => {
    setShowContent((prev)=>!prev)
    
    setTimeout(()=>{
        cr.current?.scrollIntoView({behavior: 'smooth'})
    },500)    
  }

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
            <CustomButton className="custom-button" 
              //onClick={()=>setShowContent((prev)=>!prev)} 
              onClick={handleClick}
            title={showContent?"Reset":"Start"} style={{zIndex:9}}/>
            </div>
          </div>
        </div>
      </div>

      {/* <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
        style={{zIndex:-1}}
      /> */}
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro4;
