// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact,
// and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title
// THEN I am presented with the corresponding section below the navigation
// without the page reloading and that title is highlighted

// * A single `Navigation` component within the header that will be used
// to conditionally render the different sections of your portfolio

// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

// **Note**: Because this application doesn’t include a back end
// or connect to an API, the contact form doesn't need to save this
// information right now. You'll add back-end functionality
// in the next few weeks. In the meantime, consider including
// your email address and phone number on the Contact page.

import React from "react";
// import styles from '../../styles/PortfolioStyles'

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div>
    <ul className="flexThis">
      <li className="navContainer">
        <a
          href="#AboutMe"
          onClick={() => handlePageChange("AboutMe")}
          //ternary operators checking for the truthiness of nav-link ( kinda like req.params)
          className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
          id="navButton"
        >
          AboutMe
        </a>
      </li>

      <li className="navContainer">
        <a
          href="#Project"
          // when the client clicks on the event button to trigger this function, it will perform another functon to swap the page
          onClick={() => handlePageChange("Project")}
          // checks to see if the currentPage STATE VALUE is equal to the htmls tag "Blog" if it is, it will set 'nav-link active' otherwise just "nav-link"
          className={currentPage === "Project" ? "nav-link active" : "nav-link"}
          id="navButton"
        >
          My Projects
        </a>
      </li>
      <li className="navContainer">
        <a
          href="#ContactMe"
          // when the client clicks on the event button to trigger this function, it will perform another functon to swap the page
          onClick={() => handlePageChange("ContactMe")}
          // checks to see if the current page STATE VALUE is equal to the htmls tag "Contact" if it is, it will set 'nav-link active' otherwise just "nav-link"
          className={
            currentPage === "ContactMe" ? "nav-link active" : "nav-link"
          }
          id="navButton"
        >
          Contact Info
        </a>
      </li>
      <li className="navContainer">
        <a
          href="#Resume"
          onClick={() => handlePageChange("Resume")}
          //ternary operators checking for the truthiness of nav-link ( kinda like req.params)
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          id="navButton"
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
  );
}

export default Navigation;
