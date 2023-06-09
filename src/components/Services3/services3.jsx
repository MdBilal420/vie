import React from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";
import { IoIosPeople } from "react-icons/io";
import { FaSortAmountUp } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { IoMdReverseCamera } from 'react-icons/io';

const Services3 = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              {/* <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Services
              </h6> */}
              <h3 className="wow color-font wow fadeIn" data-wow-delay=".5s">
                Our Services.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                {/* <i className="ion-ios-airplane"></i> */}
                <FaBullhorn />
              </span>
              <h5>Brand Awareness</h5>
              <p>
                Implant your brand name in the brain of hundreds of millions of consumers.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                {/* <i className="ion-ios-bolt-outline"></i> */}
                <FaSortAmountUp />
              </span>
              <h5>Increase Your Sales Right Away</h5>
              <p>
              We can 2,3,10x your revenue and then you have completely new company on
              Your hands.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                {/* <i className="ion-cube"></i> */}
                <IoIosPeople />
              </span>
              <h5>Become HouseHold Name</h5>
              <p>
                It guarantees that you sustain awareness and sales for your brandin coming years
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                {/* <i className="ion-ios-color-wand"></i> */}
                <IoMdReverseCamera />
              </span>
              <h5>Reversing Bad Publicity</h5>
              <p>
                Bad things can happen to any brand or director. Here we are to reverse it painlessly.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services3;
