import React from "react";
import fadeWhenScroll from "../../common/fadeWhenScroll";

const ConferenceHeader = ({ sliderRef }) => {
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .capt .parlx"));
  }, []);
  return (
    <header
      ref={sliderRef}
      className="works-header fixed-slider hfixd valign sub-bg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 static">
            <div className="capt mt-50">
              <div className="parlx text-center">
                <h1 className="color-font">Our Conference</h1>
                <p>
                Our main Investor Vanguard Hedge Fund with 14,000 crores under
                            management hosted 1st International conference and announced 325 crores
                            FDI investment for Influence Media Corp
                </p>
              </div>

              {/* <div className="bactxt custom-font valign">
                <span className="full-width">Conference</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ConferenceHeader;
