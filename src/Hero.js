import React from "react";
import "./Hero.css";

const Hero = () => {
  // Scroll to projects section
  const goToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to contact section
  const goToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  // Force download resume (works on all mobile devices)
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Janardhan_Resume.pdf"; // Make sure this file is inside public/
    link.setAttribute("download", "Janardhan_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero">
      <div className="hero-content">

        <button className="welcome-btn">Welcome to my Portfolio</button>

        <h1 className="name-text">Janardhan Komerla</h1>

        <h2 className="role">Java Full Stack Web Developer</h2>

        <div className="btn-group">
          <button className="primary-btn" onClick={goToProjects}>
            View My Work ↓
          </button>

          <button className="outline-btn" onClick={goToContact}>
            Get In Touch
          </button>

          {/* Fixed Resume Download Button */}
          <button
            onClick={downloadResume}
            className="resume-btn"
            style={{
              padding: "12px 25px",
              background: "#ff9800",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "17px",
              fontWeight: "600",
            }}
          >
            Download Resume
          </button>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/janardhankomerla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/janardhan-komerla-721296277/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/_janardhan_komerla_?igsh=MWFzYmJ6b240cWt0Ng=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
