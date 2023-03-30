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
          title="Reversing Bad Publicity"
          paragraph="Bad things can happen to any brand or director. Here we are to reverse it painlessly."
        />
        {/* <ProjectIntroduction projectIntroductionData={ProjectDate.intro} /> */}
        <ProjectDescription 
          id="01"
          title=""
          content="The director of brand will be invited to multiple podcasts , with our partnered influencers and there we
          will focus on good about him and make it viral because everything needs explanation. If people see it right
          they will stand on your side and defend you like a family member." 
        />
        <ProjectDescription 
          id="02"
          title=""
          content="We will use american and russian secret service tactics meaning we gonna overshadow bad news
          about you and give people direction how they should think about that matter then we gonna repeat it few
          times so they believe what is really true and what is your strong side and don't even pay attention about
          some bad PR." 
        />
        <ProjectDescription 
        id="03"
        title=""
        content="We will run a campaign on Instagram pages with hundreds of millions of followers by taking the best
        clips out of podcast and make it go viral , we will also focus on good in personal life or character and
        make it go viral." 
      />
      {/* <ProjectDescription 
          id="04"
          title="Meme marketing"
          content="Considering funny and viral character of memes ,one should be very selective in
          choosing and designing memes for your brand . Right memes on right pages can make whole world talk
          about your brand or make fun of your brand . Don't just do it because it's viral but chose right media
          corporation who can do it flawlessly without one wrong move." 
        /> */}
        {/* <NextProject /> */}
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
