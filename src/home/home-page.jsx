import React,{useState} from "react";
//import Navbar from "../../components/Navbar/navbar";
import Navbar from "../components/Navbar/navbar"
import FullTestimonials from "../components/Full-testimonials/full-testimonials";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import Team from "../components/Team/team";
import DarkTheme from "../layouts/Dark";
 import Works3 from "../components/Works3/works3";
import Blogs4 from "../components/blogs/Blogs4/blogs4";
import Blogs1 from "./files/blogs/blogs1";
import Intro4 from "../components/Intro4/intro4";
import AboutUs3 from "../components/About-us3/about-us3";
import Services3 from "../components/Services3/services3";
 import MinimalArea2 from "../components/Minimal-Area2/minimal-area2";
import Services from "../components/Services/services";

//import Conference from "../components/Works/Conference";
import Works from "../components/Works/works";
import Conference from "../components/Works/conference1";

import Numbers from "../components/Numbers/numbers";

 import Team2 from "../components/Team2/team2";
import CustomDesign from "../components/Custom-Design/custom-design";
import SContactForm from "../components/s-contact-form/s-contact-form";

import handleViewport from 'react-in-viewport';
import ConContainer from "../components/Works/concontainer";


const ViewportBlock = handleViewport(CustomDesign, /** options: {}, config: {} **/);

const Homepage5 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const customDesignRef = React.useRef(null);
  const serviceRef = React.useRef(null);

  const [showContent,setShowContent] = useState(false)

  React.useEffect(() => {
    var navbar = navbarRef.current;
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
      <Navbar nr={navbarRef} lr={logoRef}  />
      <Intro4 
        cr={customDesignRef}
        showContent={showContent}
        setShowContent={setShowContent}
      />
      {showContent ? <><ViewportBlock cr={customDesignRef}
        sr={serviceRef}
        onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
        <Services3 sr={serviceRef} />
        {/* <Conference /> */}
        <ConContainer />
        <Blogs1 />
      <CallToAction />
      <SContactForm />
      <Footer /> </>: null}
      
    </DarkTheme>
  );
};

export default Homepage5;
