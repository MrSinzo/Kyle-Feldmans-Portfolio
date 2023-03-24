import React from "react";
import ghIcon from "../images/github-mark-white.png";

// import styles from '../../App.css'; in App.js with
// className="picFix2" (or another classname css) in the html, you can call in the css from app.css,

// instead of writing in the styles in the js file and calling them with styles={styles.picFix2}

// const styles = {
//   picFix2: {
//     maxWidth: '400px',
//     maxHeight: 'auto',
//   }
// }
// in html you would put styles={styles.picFix2}

function Project(props) {
  return (
    <div className="myCard">
      <h1>
        {props.name}{" "}
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          <img className="projectIcons" src={ghIcon} />
        </a>
      </h1>
      <div>
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <img
            className="picFix2"
            src={props.src}
            alt="Kyle Feldmans Projects"
          />
        </a>
        <p className="">{props.description} </p>
      </div>
    </div>
  );
}

export default Project;

// * A single `Project` component that will be used multiple times in the Portfolio section

// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s
// applications with links to both the deployed applications and the corresponding GitHub repositories

// For each project that is featured in your portfolio, include the following:

// * An image of the deployed application (either a short animated GIF or screenshot)

// * The title of the project

// * A link to the deployed application

// * A link to the corresponding GitHub repository
