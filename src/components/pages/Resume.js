import React from "react";
import ResumeDownload from "../../assets/Resume03_1_23.pdf";

function Resume() {
  return (
    <div>
      <div className="ctxt myCard">
        <h2 ><a href={ResumeDownload} download="Kyle Feldman's Resume">
          My Full Resume Here!
        </a></h2>
        <h2>Kyles Certificates/Licenses</h2>
        <ul>
          <li>
            <a href="" src="">Full Stack Web Development</a></li>

            <li>From University of Washington Fullstack Bootcamp

          </li>
        </ul>
      </div>
      <div>
        <ul  className="myCard">
          <h3>General Skills:</h3>
          <li>Project management</li>
          <li>Sales Techniques</li>
          <li>Extremely Organized</li>
          <li>Extreme Professional Customer service</li>
          <li>Data management</li>
          <li>Active listening and understanding</li>
          <li>Friendly, positive, and professional attitude</li>
          <li>Very Productive.</li>
          <li>Keeps Focused on Primary Tasks</li>
          <li>Posesses Technology Learning speed and skills</li>
          <li>Business before Pleasure is my motto</li>
        </ul>
        <div>
          <br />
          <ul className="myCard">
            {" "}
            <h3>Computer Skills:</h3>
            <li>Moderate Html and Css</li>
            <li>Moderate JavaScript</li>
            <li>
              Can apply and understand some CSS frameworks like Bootstrap or
              Bulma.
            </li>
            <li>MySQL and Sequelize Database</li>
            <li>Github functionality</li>
            <li>Some heroku Knowledge</li>
            <li>Typing Speed of about 40 wpm</li>
            <li>Google.Docs</li>
            <li>Storage Clouds like Dropbox, Onedrive etc.</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
