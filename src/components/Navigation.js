import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="ele-bottom-push">
      <div className="flexThis">
        <li className="navContainer">
          <a
            href="#AboutMe"
            onClick={() => handlePageChange("AboutMe")}
            //ternary operators checking for the truthiness of nav-link ( kinda like req.params)
            className={
              currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }
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
            className={
              currentPage === "Project" ? "nav-link active" : "nav-link"
            }
            id="navButton"
          >
            My Projects
          </a>
        </li>
        <li className="navContainer">
          <a
            href="#Resume"
            onClick={() => handlePageChange("Resume")}
            //ternary operators checking for the truthiness of nav-link ( kinda like req.params)
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
            id="navButton"
          >
            Resume
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
      </div>
    </div>
  );
}

export default Navigation;
