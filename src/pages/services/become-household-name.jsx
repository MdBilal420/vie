import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ProjectDetails2Header from "../../components/Project-details2-header/project-details2-header";
import ProjectDate from "../../data/project-details2.json";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";
import ProjectGallery from "../../components/Project-gallery/project-gallery";
import ProjectDescription from "../../components/Project-description/project-description";
import ProjectVideo from "../../components/Project-video/project-video";
import NextProject from "../../components/Next-project/next-project";
import PageHeader from "../../components/Page-header/page-header";

const ProjectDetails2Dark = () => {
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
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className="wrapper">
        {/* <ProjectDetails2Header projectHeaderData={ProjectDate} /> */}
        <PageHeader
          title="Become HouseHold Name"
          paragraph="It guarantees that you sustain awareness and sales for your brandin coming years"
        />
        {/* <ProjectIntroduction projectIntroductionData={ProjectDate.intro} /> */}
        <ProjectDescription 
          id="01"
          title="Testimonial Campaigns"
          content="Only advertisement, promos or increasing sales are not enough to become a
          household name . To engrave your brand in each house door . It takes much more then some promotional
          campaign. We can make 100's of millions of people feel that your brand and your products are integral
          part of their home." 
        />
        <ProjectDescription 
          id=""
          title=""
          content="We will collect the best reviews / testimonials of your brand and run a campaign that will reach hundred
          of millions of followers . Familiar names from the most beloved movies and beloved sport teams will
          represent your brand .Well known public figures will use your product and services themselves and will
          recommend to vasy majority of population." 
        />
        <ProjectDescription 
        id=""
        title=""
        content="We gonna be providing support from all sides so your brand achieves the environment where you
        become member of people's families. This way people will defend your brand and recommend to others
        without you doing anything" 
      />
      <ProjectDescription 
          id="02"
          title="Surveys /Research"
          content="People love facts , people love to be right and they love when they have some statistics to prove it . That
          is why we gonna conduct a lot of surveys and research supporting and proving all the good in your brand
          so idea that your brand is a winner should not be somebody's opinion but a fact" 
        />
        <ProjectDescription 
          id=""
          title=""
          content="House hold brands always believe in keeping their customers happy. To obtain that we will reach millions
          of followers from our influencers ,pages and collect feedback about your brand / what customer wants in
          any product / brand and based on that your brand can improve decision making." 
        />
        {/* <NextProject /> */}
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
