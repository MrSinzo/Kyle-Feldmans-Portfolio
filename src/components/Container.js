import React, { useState } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Project from "./pages/Project";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import Footer from "./Footer";
import Screenshot1 from "../images/p1-1_LIVE.png";
import MailSeeds from "../images/Mail-Seeds.png";
import JATE from "../images/JATE.png";
import PasswordGenLIVE from "../images/PasswordGenLIVE.png";
import NoteTaker from "../images/Note-Taker.png";
import RPSGame from "../images/RPSGame.png";

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
      return (
        <div>
          <Project
            name="Mail-Me-Seeds"
            src={MailSeeds}
            href="https://mail-me-seeds.herokuapp.com/"
            description="The idea behind Mail-Me-Seeds was so avid gardeners could trade and collect various seeds for their hobby. This project was a large take on for our group of 4 including myself, and as always, it seemed like a simple approach, but as our needs for new interactions grew, so did the application. We were able to apply a password reset feature by using the Node-mailer package, along with the ability for users to send requests to each other for various seeds!"
            github="https://github.com/TheBluWiz/mail-me-seeds"
          />

          <Project
            name="Gif-Me-That-Movie"
            src={Screenshot1}
            href=""
            description="A fun application that will give you information based on when the movie was made, by whom, etc. It will also present some various 'gifs' from the movie you searched for! This was the first Group project I was involved with and was mainly incharge of adding the Bulma CSS Framework to our application."
            github="https://github.com/MaksimRazuvaev/funny_movie_gif"
          />

          <Project name="JATE" src={JATE} href="https://text-editor-sinzostyle.herokuapp.com/" description="This is a simple little text-editor that can save your entires for later use as whether or not you have online access or not at the time. It is a PWA." github="https://github.com/MrSinzo/Text_Editor_SinzoStyle"/>

          <Project name="Password Generator" src={PasswordGenLIVE} href="https://mrsinzo.github.io/Sinzo-Password-Generator/" description="This is a simple Password Generator that will ask confirmations on various characters the user would like to include in a randomly generated password." github="https://github.com/MrSinzo/Sinzo-Password-Generator"/>

          <Project name="Note-Taker" src={NoteTaker} href="https://mrsinzo.github.io/Note-Taker-SinzoStyle/" description="This is a simple application using a express.js server to keep your notes organized! I was always using this during class since it was so simple and useful" github="https://github.com/MrSinzo/Note-Taker-SinzoStyle"/>

          <Project
            name="Rock-Paper-Scissors"
            src={RPSGame}
            href="https://mrsinzo.github.io/Sinzos-RPS-Game/"

            description="Here is  a very simple application ran on your browser to play rock-paper-scissors with an AI and keep track of your score! This little project was a MAJOR learning curve for me in my early days of learning JavaScript. I was just getting use to HTMl and CSS syntax and then being introduced to Javascript so shortly after was quite a shock."
            github="https://github.com/MrSinzo/Sinzos-RPS-Game"
          />
        </div>
      );
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
