/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from 'next/link'

const Blogs1 = () => {
  return (
    <section className="blog section-padding sub-bg" id="our-blogs">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head">
              <h3 className="wow color-font">Our Blogs.</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".3s">
              <div className="img">
                <img src="/img/blog/media1.jpg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark">
                    <a  className="date">
                      <span>
                        <i>02</i> May
                      </span>
                    </a>
                    </Link>
                    <span>/</span>
                  
                  </div>
                  <h5>
                    <Link href="/blog-details/modern-media-vs-traditional-media">
                    <a >
                    Modern Media vs. Traditional Media: Which One is Better
                    </a>
                    </Link>
                  </h5>
                  <div className="btn-more">
                    <Link href="/blog-details/modern-media-vs-traditional-media">
                    <a className="simple-btn">
                      Read More
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6">
            <div className="item md-mb50 wow fadeInUp" data-wow-delay=".5s">
              <div className="img">
                <img src="/img/blog/2.jpg" alt="" />
              </div>
              <div className="cont">
                <div>
                  <div className="info">
                    <Link href="/blog/blog-dark">
                    <a  className="date">
                      <span>
                        <i>06</i> August
                      </span>
                    </a>
                    </Link>
                    <span>/</span>
                    <Link href="/blog/blog-dark">
                    <a  className="tag">
                      <span>WordPress</span>
                    </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="/blog-details/blog-details-dark">
                    <a >
                      How to use solid color combine with simple furnitures.
                    </a>
                    </Link>
                  </h5>
                  <div className="btn-more">
                    <Link href="/blog-details/blog-details-dark">
                    <a className="simple-btn">
                      Read More
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Blogs1;
