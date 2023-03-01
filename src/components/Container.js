import React, { useState } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Project from "./pages/Project";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import Footer from "./Footer";
import Me from '../images/ProfilepicSchool.png'
import Screenshot1 from '../images/p1-1_LIVE.png'
import Screenshot2 from '../images/Mail-Seeds.png'
import Screenshot3 from '../images/placeholder.png'
import Screenshot4 from '../images/placeholder.png'
import Screenshot5 from '../images/placeholder.png'
import Screenshot6 from '../images/placeholder.png'


function Container() {
  const [currentPage, setCurrentPage] = useState("AboutMe");
  // this is the function that renders components (pages)
  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return (
        <div>
          <AboutMe />
        </div>
      );
    }
    if (currentPage === "Project") {
      return (<div>
        <Project name="Mail-Me-Seeds" src={Screenshot2} href="https://mail-me-seeds.herokuapp.com/" description="The idea behind Mail-Me-Seeds was so avid gardeners could trade and collect various seeds for their hobby. This project was a large take on for our group, as always, it seemed like a simple approach, but as our needs for new interactions grew, so did the application.  "/>
        
        <Project name="Gif-Me-That-Movie" src={Screenshot1} href="" description="" />

        <Project name="P4" src={Screenshot3} href="" description="" />

        <Project name="P3" src={Screenshot4} href="" description="" />

        <Project name="P5" src={Screenshot5} href="" description="" />

        <Project name="P6" src={Screenshot6} href="" description="" />
      </div>);
    }
    if (currentPage === "ContactMe") {
      return <ContactMe />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default Container;
