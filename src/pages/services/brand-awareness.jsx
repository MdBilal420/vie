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
          title="Brand Awareness"
          paragraph="Implant your brand name in the brain of hundreds of millions of consumers"
        />
        {/* <ProjectIntroduction projectIntroductionData={ProjectDate.intro} /> */}
        <ProjectDescription 
          id="01"
          title="Influencer marketing"
          content="We will choose one of this word
          Influencers, Sport stars, Movie stars with hudreds of millions of followers and strong reputation on their
          social media platforms like Instagram YouTube Twitter will talk about your brand and leverage their
          credibility to create awareness among large number of population in total reaching 2 billion users ." 
        />
        <ProjectDescription 
          id="02"
          title="Celebrity Endorsements"
          content="Worldwide stars and we'll known celebrities with a huge fan base , high quality
          reputation will represent your products , ideas and services on all their social media platforms." 
        />
        <ProjectDescription 
        id="03"
        title="PR"
        content="Our world class Pr professionals will create a desired , very positive image and flawless reputation
        of your brand. We will be working in all directions, it will be websites , journalists tv reporters , magazines
        and channels . Even a person living in cave will hear good words about your brand." 
      />
      <ProjectDescription 
          id="04"
          title="Meme marketing"
          content="Considering funny and viral character of memes ,one should be very selective in
          choosing and designing memes for your brand . Right memes on right pages can make whole world talk
          about your brand or make fun of your brand . Don't just do it because it's viral but chose right media
          corporation who can do it flawlessly without one wrong move." 
        />
        {/* <NextProject /> */}
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
