import React from "react";
import blog3Data from "../../data/blog3.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import MediaBlog from "../../components/Blog-details/media-blog";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";

const BlogDetailsDark = () => {
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
        title="Modern Media VS Traditional Media"
        paragraph="A Comparison of the Advantages and Disadvantages of Modern and Traditional Media"
      />
          <MediaBlog blog={"blog"} />
          <Footer />
    </DarkTheme>
  );
};

export default BlogDetailsDark;
