import React from "react";
import ghIcon from "../images/github-mark-white.png";

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