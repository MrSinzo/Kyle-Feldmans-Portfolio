import React from "react";
import Me from '../images/ProfilepicSchool.png'

export default function AboutMe() {
  return (
    <section>
      <aside>
        <h2>Welcome!</h2>
      </aside>
      <img className='profilePicFix' src={Me} alt='Profile Pic of Kyle'/>
      <article className="subContainer">
        Hello, my name is Kyle Feldman and thank you for taking
        the time to review my work to have possible employment based on my
        skills and talent that I can offer to you or your team! Below you will
        find a vareiety of projects I once found challenging or difficult to
        comprehend. I am a diligent and persistant hard-worker. I dont give up
        on things very easily, and dislike the feeling of "being defeated". I am
        exetremely productive, and dislike wasting anyone's time, especially my
        own or my employer's. Thats how it works in this world, no matter where you are from. 
        I am paid to work and produce great, quality content, 
        along with a being a plesant member of any team!
      </article>
      <h2>Brand Statement</h2>
      <article>As a curious and tech-savvy web developer, I have always had a desire to understand technology and its limits. I recently completed an intensive web development coding bootcamp offered by University of Washington. I gained a great deal of experience in the foundations of web development, and continue to hone my skills in HTML5, CSS, Bootstrap, JavaScript, React and a bit of Express.js and GraphQL. Having an appetite for continuous learning opportunities and challenges, collaboration, and problem-solving, I plan to create and maintain websites while also developing iOS and/or Android apps. Equally passionate about building applications that assist people to make their lives easier. Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset.</article>
    </section>
  );
}
