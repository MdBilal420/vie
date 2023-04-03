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
import Intro4 from "../components/Intro4/intro4";
import AboutUs3 from "../components/About-us3/about-us3";
import Services3 from "../components/Services3/services3";
 import MinimalArea2 from "../components/Minimal-Area2/minimal-area2";
import Services from "../components/Services/services";
 import Team2 from "../components/Team2/team2";
import CustomDesign from "../components/Custom-Design/custom-design";
import SContactForm from "../components/s-contact-form/s-contact-form";

import handleViewport from 'react-in-viewport';


const ViewportBlock = handleViewport(CustomDesign, /** options: {}, config: {} **/);

const Homepage5 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const customDesignRef = React.useRef(null);
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
      {showContent ? <><ViewportBlock cr={customDesignRef} onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
      <Services3 />
      <CallToAction />
      <SContactForm />
      <Footer /> </>: null}
{/* <AboutUs3 />
      <Works3 /> */}
      {/* <CustomDesign /> */}
      
      {/* <Services /> */}
      {/* <MinimalArea2 /> */}
      {/* <FullTestimonials classText="pb-0" /> */}
      {/* <Team />
      <Blogs4 />
      <Team2 /> */}
    </DarkTheme>
  );
};

export default Homepage5;
