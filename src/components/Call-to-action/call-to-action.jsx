import React from 'react'
import Split from '../Split'
import Link from 'next/link'

const CallToAction = ({img}) => {
    return (
      <section
      id="about-us"
        className="call-action section-padding sub-bg bg-img"
        style={{ backgroundImage: `url(${img ? img : "/img/patrn.svg"})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head">
              <h3 className="wow color-font wow fadeIn" data-wow-delay=".5s">
                About Us
              </h3>
                {/* <Split>
                  <h4 className="wow words chars splitting" data-splitting>
                    Let’s Talk
                  </h4>
                  <h5 className="wow words chars splitting" data-splitting>
                    about your <br /> <b className="back-color">next project</b>
                    .
                  </h5>
                </Split> */}
              </div>
            </div>
            {/* <div className="col-md-4 col-lg-3 valign">
              <Link
                href={`/contact/contact-dark`}
              >
                <a
                  className="butn bord curve wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span>Get In Touch</span>
                </a>
              </Link>
            </div> */}
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 items md-mb30">
              <div className="item wow fadeIn" data-wow-delay=".3s">
                <h5 className="wow words chars splitting" data-splitting>
                  Our Media Company is backed by International Asset Management Company <b className="back-color">Vanguard Hedge
                  Fund</b>. <br />Ensuring we don’t have a lack of funds . Our focus is not to make profits right away but to
                  build the largest modern mass media Conglomerate.<br /> It is guaranteed that any project we start
                  will be finished seamlessly ,no matter what.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default CallToAction