import React from "react";
import "./About.css";
import myPhoto from "./assets/images/me.jpg";



const About = ({
  name = "Your Name",
  bio = `Hi, I'm a passionate and dedicated Full Stack Developer who loves creating beautiful, responsive, and user-friendly web applications. My journey into the tech world began with curiosity and has grown into a deep love for coding, problem-solving, and building digital experiences.`,
  degree = "B.Tech in Computer Science and Engineering",
  college = "Your College Name",
  gradYear = "Expected Graduation: 2025"
}) => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        <div className="about-text">
          <p>
            Hi, I'm <strong>Janardhan </strong>, A Java Full Stack Developer skilled in designing, developing, and deploying full-cycle web applications.
My goal is to build reliable, scalable, and user-focused solutions using Java, Spring Boot, React, and SQL.
          </p>

          <div className="college-details">
            <ul>
              <li>
            <h3>Annamacharya Institute of Technology & Sciences, Rajampeta</h3>
            <p>
              <strong>B.Tech in Computer Science and Engineering</strong>
              <br></br>
              <em>2022 - 2025</em>
            </p>
            </li>
            <li>
            <h3>Sree Vidhyanikethan Engineering College, Rangampeta</h3>
            <p>
              <strong>Diploma in Mechanical Engineering</strong>
              <br></br>
              <em>2019 - 2022</em>
            </p>
            </li>
            </ul>
          </div>
        </div>

        <div className="image-placeholder">
         <img src={myPhoto} alt="My Photo" className="about-photo" />
          </div>

      </div>
    </section>
  );
};

export default About;

