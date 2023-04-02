import Arrow from "./Arrow/arrow"
// import Logo from "./Logo/logo"
import MovingText from 'react-moving-text'
import CurlyHeader from "./curly-header";
import { useState } from "react";
import CustomButton from "./custom-button";

const Letters = "Multiple pages, channels, blogs, podcasts, influencers, stars."
const CustomDesign = (props) => {

    const { inViewport,forwardedRef } = props;
    const [showContent,setShowContent] = useState(false)
    const letters = Letters.split("")

    console.log(inViewport,)
    return (
        <section className="feat sub-bg section-padding" ref={forwardedRef}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-10">
                        <div className="sec-head  text-center">
                            {/* <CurlyHeader /> */}
                            <h3><span className="color-font">International Corporations and Brands</span></h3>
                        </div>
                    </div>
                </div>
                {inViewport && <MovingText
                    type="slideInFromBottom"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none"
                >
                    <div className="row justify-content-center">
                        <div>
                            <Arrow degree={'rotate(130deg)'} />
                        </div>
                        <div>
                            <Arrow degree={'rotate(90deg)'} />
                        </div>
                        <div style={{marginTop:"-20px"}}>
                            <Arrow degree={'rotate(50deg)'} />
                        </div>        
                    </div>
                </MovingText>}
                <div className="row justify-content-center" style={{marginTop:"40px"}}>
                    <div
                    className="col-lg-6"
                    style={{display:"flex",justifyContent:"space-around"}}
                    >
                            <MovingText
                                type="slideInFromLeft"
                                duration="2000ms"
                                delay="0s"
                                direction="normal"
                                timing="ease"
                                iteration="1"
                                fillMode="none">
                                <div className="sub-title" style={{right:"25px"}}>
                                    <h6>asks</h6>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </MovingText>
                            <MovingText
                                type="slideInFromBottom"
                                duration="2000ms"
                                delay="0s"
                                direction="normal"
                                timing="ease"
                                iteration="1"
                                fillMode="none">
                                <div className="sub-title" style={{right:"5px"}}>
                                    <h6>and</h6>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </MovingText>
                            <MovingText
                                type="slideInFromLeft"
                                duration="2000ms"
                                delay="0s"
                                direction="normal"
                                timing="ease"
                                iteration="1"
                                fillMode="none">
                                <div className="sub-title" style={{right:"0px"}}>
                                    <h6>wants</h6>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </MovingText>                      
                    </div>
                </div>
                <div className="row justify-content-center">
                    {/* <Logo /> */}
                    <div className="col-lg-6 col-md-6 md-mb20" style={{marginRight:"20px"}}>
                        <div className="item wow fadeI text-center mt-30 mb-30">
                            {/* <button className="butn mt-30 mb-30"
                                style={{borderRadius:"50%",width:"100px",height:"100px",background:"black",
                                borderWidth:"2px",
                                color:"white",
                                borderColor:"linear-gradient(to right, #12c2e9, #c471ed)"}}
                                onClick={()=>setShowContent((prev)=>!prev)}
                            >
                                <span>{showContent?"Reset":"Start"}</span>
                            </button> */}
                            <CustomButton onClick={()=>setShowContent((prev)=>!prev)} title={showContent?"Reset":"Start"} />
                        </div>
                    </div>
                </div>
                
                {showContent ? <div>
                    <div className="row justify-content-center" style={{marginTop:"40px", marginLeft:"10px",marginBottom:"10px"}}>
                    <MovingText
                        type="slideInFromBottom"
                        duration="500ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                        <div style={{ marginLeft:"-10px"}}>
                            <Arrow degree={'rotate(90deg)'} />
                        </div>
                    </MovingText>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-10">
                            <div className="sec-head  text-center">
                                <MovingText
                                    type="slideInFromBottom"
                                    duration="3000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="ease-in"
                                    iteration="1"
                                    fillMode="none">
                                    <h4>{Letters}</h4>
                                </MovingText>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-30" style={{justifyContent:"space-around"}}>
                        <MovingText
                            type="slideInFromBottom"
                            duration="8000ms"
                            delay="0s"
                            direction="normal"
                            timing="ease-in"
                            iteration="1"
                            fillMode="none">
                                <div>
                                    <Arrow degree={'rotate(90deg)'} />
                                </div>
                        </MovingText>
                        
                        <MovingText
                            type="slideInFromBottom"
                            duration="8000ms"
                            delay="0s"
                            direction="normal"
                            timing="ease-in"
                            iteration="1"
                            fillMode="none">
                                <div>
                                    <Arrow degree={'rotate(90deg)'} />
                                </div>
                        </MovingText>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-md-12 md-mb20 mb-30">
                            <div className="item wow fadeI text-center">
                                <MovingText
                                    type="slideInFromBottom"
                                    duration="10000ms"
                                    delay="0s"
                                    direction="normal"
                                    timing="ease-in"
                                    iteration="1"
                                    fillMode="none">
                                    <h5 className="wow words chars splitting" data-splitting>
                                            Hundred of millions of people consuming.
                                    </h5>
                                </MovingText>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 md-mb20">
                        <div className="item wow fadeI text-center">
                            <MovingText
                                type="slideInFromBottom"
                                duration="12000ms"
                                delay="0s"
                                direction="normal"
                                timing="ease-in"
                                iteration="1"
                                fillMode="none">
                                <p className="wow words chars splitting" data-splitting>
                                    Not posible anywhere else what we deliver.
                                </p>
                            </MovingText>
                        </div>
                    </div>
                </div>:null}
            </div>
            <div className="line bottom left"></div>
        </section>
    )
}

export default CustomDesign