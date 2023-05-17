import React from "react";
import blog3Data from "../../data/blog3.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";
import StrategyBlog from "../../components/Blog-details/strategy-blog";

const SuccessfullMediaStrategy = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        title="How to Build a Successful Media Strategy for Your Business"
        paragraph="Harnessing the Power of Modern Media to Propel Your Brand Forward"
      />
          <StrategyBlog blog={"blog"} />
          <Footer />
    </DarkTheme>
  );
};

export default SuccessfullMediaStrategy;
