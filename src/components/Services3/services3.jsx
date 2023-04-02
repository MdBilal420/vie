import React, { useState } from "react";
import Link from "next/link";
import cardMouseEffect from "../../common/cardMouseEffect";
import { IoIosPeople } from "react-icons/io";
import { FaSortAmountUp } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa";
import { IoMdReverseCamera } from 'react-icons/io';
//import Typewriter from "typewriter-effect";
import { data } from "./data";
import Details from "./details";
import ServiceIntro from "./service-into";


const Services3 = () => {

  const [service,setService] = useState(4)

  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section id="our-services" className="feat sub-bg section-padding">
      <div className="line bottom left"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h3 className="wow color-font wow fadeIn" data-wow-delay=".5s">
                Our Services.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-lg-3 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <FaBullhorn />
              </span>
              <h5>Brand Awareness</h5>
              <p>
                Implant your brand name in the brain of hundreds of millions of consumers.
              </p>
              <Link href="/services/brand-awareness">
                <a className="simple-btn mt-30">Read More</a>
              </Link>
            </div>
          </div> */}
          {
            service===4? data.services.map((it,idx)=>(
              <ServiceIntro 
                title={it.title}
                content={it.content}
                icon={<FaBullhorn />}
                idx={idx}
                service={service}
                setService={setService}
              />
            )):<ServiceIntro 
                title={data.services[service].title}
                content={data.services[service].content}
                idx={service}
                service={service}
                setService={setService}
              />
          }
          {/* <div className="col-lg-3 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <FaSortAmountUp />
              </span>
              <h5>Increase Your Sales Right Away</h5>
              <p>
              We can 2x-3x-10x your revenue and then you have completely new company on
              Your hands.
              </p>
              <Link href="/services/increase-your-sales-right-away">
              <a className="simple-btn mt-30">Read More</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <IoIosPeople />
              </span>
              <h5>Become HouseHold Name</h5>
              <p>
                It guarantees that you sustain awareness and sales for your brandin coming years
              </p>
              <Link href="/services/become-household-name">
              <a className="simple-btn mt-30">Read More</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 items">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <IoMdReverseCamera />
              </span>
              <h5>Reversing Bad Publicity</h5>
              <p>
                Bad things can happen to any brand or director. Here we are to reverse it painlessly.
              </p>
              <Link href="/services/reversing-bad-publicity">
              <a className="simple-btn mt-30">Read More</a>
              </Link>
            </div>
          </div> */}
          {service!==4 ? <div className="col-lg-9 col-md-6 items">
            <div className="item wow fadeIn valign" data-wow-delay=".3s" style={{display:"flex",flexWrap:"wrap"}}>
                {data.serviceDetails[service].map((it)=>(
                  <Details 
                    title={it.title}
                    content={it.content}
                  />
                ))}
            </div>
          </div>:null}
        </div>
      </div>
    </section>
  );
};

export default Services3;
