/* eslint-disable @next/next/no-img-element */
import React from "react";
//import Link from "next/link";
import { Link } from "react-scroll";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme,showContent }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.appLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.appLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.appLogo} alt="logo" style={{scale:"3",marginLeft:"25px"}}/>
            )}
          </a>
        </Link>

        {showContent?<button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>:null}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {showContent?<ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {/* <Link href={`/`}> */}
                <a className="nav-link" href={`/`}>Home</a>
              {/* </Link> */}
            </li>

            <li className="nav-item" >
              <Link
                className="nav-link"
                to="our-services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                // onClick={() => {
                //   if (showContent === false) {
                //     setShowContent(true)
                //   setTimeout(() => {
                //     serviceRef.current?.scrollIntoView({behavior: 'smooth'})
                //   },500) 
                //   }
                // }}
              >
                Services
                </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="our-blogs"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Blogs
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="about-us"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact-us"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>:null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
