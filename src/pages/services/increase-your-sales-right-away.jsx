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
          title="Increase Your Sales RIght Away"
          paragraph="We can 2,3,10x your revenue and then you have completely new company on
          Your hands"
        />
        {/* <ProjectIntroduction projectIntroductionData={ProjectDate.intro} /> */}
        <ProjectDescription 
          id="01"
          title="Influencer marketing"
          content=" As more people see your product and more times people see your product chances
          increase that this product becomes your best seller . If million people saw your product these days it
          means nothing ,you can't expect it to be a top seller . But what if we can make 500 million people see
          your product multiple times ?!
          There is no doubt it can sky rocket your sales ." 
        />
        
        <ProjectDescription 
          id="02"
          title="Meme marketing"
          content=" High Meme pages with hundreds of millions of reach will drive traffic to your product link
          with positive memes . It will be done by integrating your product with funny and viral memes making
          whole country talk about your product." 
        />

        <ProjectDescription 
          id="03"
          title="Fb & Instagram ads"
          content="Our world class ads specialists team will take over your ads and they will increase
          your PRODUCTS ROI BY our secret marketing methods to the level you have not even imagined before." 
        />
        {/* <NextProject /> */}
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
