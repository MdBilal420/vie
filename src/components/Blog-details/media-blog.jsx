/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { Link as ScrollLink } from "react-scroll";

const MediaBlog = ({ theme }) => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/blog/media1.jpg" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">
                        Introduction
                      </h4>
                      <div className="spacial">
                        <p>
                            In the age of the internet, media has evolved dramatically. Traditional media,
                            such as television, radio, and newspapers, has been around for decades and has
                            been the go-to source of information. On the other hand, modern media, such as
                            social media, blogs, and online news outlets, have emerged as a new player in the media landscape.
                            In this blog, we will compare modern and traditional media, exploring their advantages and disadvantages,
                            and help you choose which one is better suited for you.
                        </p>
                      </div>
                      
                      <h6>- Advantages of Traditional Media</h6>

                      <ul>
                        <li>
                            <span>01</span> Traditional media has been around for a long time
                            and has a well-established reputation for being reliable and credible.
                        </li>
                        <li>
                          <span>02</span> It it has a broad reach, catering to a vast audience base.
                        </li>
                        <li>
                          <span>03</span> priorities that will pop up in any
                          particular month.
                        </li>
                        <li>
                          <span>04</span> It is also relatively easy to access, as it does not require internet connectivity.
                        </li>
                        </ul>
                        
                    <div style={{marginTop:"40px"}}>
                        
                        <h6>- Advantages of Modern Media</h6>

                        <ul>
                            <li>
                            <span>01</span> Modern media is its fast-paced nature
                            </li>
                            <li>
                            <span>02</span> It can break news instantly, providing up-to-date information to its readers, listeners, or viewers
                            </li>
                            <li>
                            <span>03</span> priorities that will pop up in any
                            particular month.
                            </li>
                            <li>
                            <span>04</span> It is also relatively easy to access, as it does not require internet connectivity.
                            </li>
                        </ul>
                    </div>

                      <div className="quotes text-center">
                        <p>
                            People share, read, and generally engage more with any type of content when
                            it&apos;s surfaced through friends and people they know and trust.
                        </p>
                        <p>
                        The medium is the message. 
                        </p>
                        </div>
                        <h4 className="extra-title">
                            Conclusion
                        </h4>
                      <div className="spacial">
                        <p>
                          In conclusion, Modern media is rapidly overtaking traditional media due to its inherent advantages.
                          The proliferation of smartphones, tablets, and social media platforms has transformed the way information is consumed.
                          Modern media offers immediacy and accessibility, enabling individuals to access news and entertainment anytime and anywhere.
                          The rise of digital platforms has also democratized content creation, allowing anyone with internet access to become a producer and share their perspectives.
                          Furthermore, modern media&apos;s interactive nature fosters engagement and participation, promoting a sense of community and empowerment.
                          With personalized recommendations and targeted advertisements, modern media caters to individual preferences, enhancing user experience.
                          As technology continues to advance, traditional media struggles to keep pace, making way for the dominance of modern media.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/blog/media2.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/blog/media1.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      {/* <p>
                        We all intend to plan ahead, but too often let the
                        day-to-day minutia get in the way of making a calendar
                        for the year. Sure, you can’t know every detail to
                        anticipate. Heck, you can’t know half the priorities
                        that will pop up in any particular month. But you can
                        plan for big picture seasonality, busy-times, and
                        events.
                      </p> */}
                      {/* <div className="share-info">
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                        <div className="tags">
                          <a href="#0">Web</a>,<a href="#0">Themeforest</a>,
                          <a href="#0">ThemesCamp</a>
                        </div>
                      </div> */}
                    </div>
                    {/* <div className="author">
                      <div className="author-img">
                        <img src="/img/blog/01.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          <span>author :</span> Jorden Griffin
                        </h6>
                        <p>
                          the main component of a healthy environment for self
                          esteem is that it needs be nurturing. The main compont
                          of a healthy environment.
                        </p>
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* <div className="pagination">
                <span>
                  <a href="#0">Prev Post</a>
                </span>
                <span className="icon">
                  <Link href={`/blog/blog-dark`}>
                    <a>
                      <i className="fas fa-th-large"></i>
                    </a>
                  </Link>
                </span>
                <span className="text-right">
                  <a href="#0">Next Post</a>
                </span>
              </div> */}

               {/* <div className="comments-area">
                <h5>Comments :</h5>
                <div className="item">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <ScrollLink
                        to="comment-form"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        Replay <i className="fas fa-reply"></i>
                      </ScrollLink>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div> */}
                {/* <div className="item relped">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <ScrollLink
                        to="comment-form"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        Replay <i className="fas fa-reply"></i>
                      </ScrollLink>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div> */}
                {/* <div className="item">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <ScrollLink
                        to="comment-form"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        Replay <i className="fas fa-reply"></i>
                      </ScrollLink>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div> */}
              {/* </div>  */}

              {/* <div className="comment-form" id="comment-form">
                <h5>Add Comment :</h5>
                <div className="form">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      comment: "",
                    }}
                    onSubmit={async (values) => {
                      await sendMessage(500);
                      alert(JSON.stringify(values, null, 2));
                      // Reset the values
                      values.name = "";
                      values.email = "";
                      values.comment = "";
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <Field
                                as="textarea"
                                placeholder="Your Comment"
                                name="comment"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="text"
                                placeholder="Your Name"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="email"
                                validate={validateEmail}
                                placeholder="Your Email"
                                name="email"
                              />
                              {errors.email && touched.email && (
                                <div>{errors.email}</div>
                              )}
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group text-center">
                              <button
                                type="submit"
                                className={`nb butn ${
                                  theme
                                    ? theme === "light"
                                      ? "dark"
                                      : ""
                                    : "light"
                                } curve full-width`}
                              >
                                Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaBlog;
