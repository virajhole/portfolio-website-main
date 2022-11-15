import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { VscFolderActive } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">{/* <img src={ME} alt="" /> */}</div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small> 6 Months Years of Working </small>
            </article>

            <a href="#education" style={{ color: "white" }}>
              <article className="about__card">
                <GiGraduateCap className="about-icon" />
                <h5>Education</h5>
                <small> Educational Details </small>
              </article>
            </a>

            <a href="#Portfolio" style={{ color: "white" }}>
              <article className="about__card">
                <VscFolderActive className="about-icon" />
                <h5>Projects</h5>
                <small> 5+ Completed </small>
              </article>
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            tenetur mollitia molestiae, cumque, nulla culpa neque sequi incidunt
            pariatur quam aliquid animi. Cum deserunt iste illo vitae obcaecati
            enim dicta?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
