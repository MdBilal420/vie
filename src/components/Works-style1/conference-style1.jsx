/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import tooltipEffect from "../../common/tooltipEffect";
import conferenceData from "../../data/sections/conference.json";


const ConferenceStyle1 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      tooltipEffect();
    }, 1000);
  }, []);
  return (
    <section className="works section-padding pb-70">
      <h2 style={{display: 'none'}}>&nbsp;</h2>
      <div className="container">
        <div className="row lg-space">
            {conferenceData.slice(0,18).map((it, idx) => (
                <div className="col-lg-4 col-md-6" key={it.id}>
                <div className="item">
                    <a>
                    <div
                        className="img"
                        data-tooltip-tit="Conference"
                        data-tooltip-sub="Mumbai"
                    >
                        <img src={`${it.image}`} alt="" />
                    </div>
                    </a>
                </div>
            </div> 
            ))}          
        </div>
      </div>
    </section>
  );
};

export default ConferenceStyle1;
