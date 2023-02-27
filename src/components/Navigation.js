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
//your email address and phone number on the Contact page.

import React, { useState } from "react";
import Header from "./Header";
import Project from "./Project"
import AboutMe from "./AboutMe"
import ContantMe from "./ContactMe"

function Navigation() {
  return (
    <div>
      <div><a class="navBtnBorder" href="%PUBLIC_URL%">About me</a></div>
      <div><a class="navBtnBorder" href="%PUBLIC_URL%/Project">My work</a></div>
      <div><a class="navBtnBorder"href="#nav3">Contact Me!</a></div>
      <div><AboutMe /></div>
    </div>
  
    
  )
}


export default Navigation;