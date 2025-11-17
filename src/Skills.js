import React from "react";
import "./Skills.css";
import java from "./assets/icons/java.svg";
import html5 from "./assets/icons/html5.svg";
import css3 from "./assets/icons/css3.svg";
import javascript from "./assets/icons/javascript.svg";
import python from "./assets/icons/python.svg";
import hibernate from "./assets/icons/hibernate.svg";
import react from "./assets/icons/react.svg";
import mysql from "./assets/icons/mysql.svg";

import vscode from "./assets/icons/vscode.svg";
import github from "./assets/icons/github.svg";

export default function Skills() {
  const skills = [
    { name: "Java", logo: java },
    { name: "HTML5", logo:  html5},
    { name: "CSS3", logo: css3},
    { name: "JavaScript", logo:javascript },
    { name: "Python", logo: python},
    { name: "Hibernate", logo:hibernate  },
    { name: "React", logo: react },
    { name: "MySQL", logo: mysql },
  ];

  const tools = [
    { name: "VS Code", logo: vscode },
    {
      name: "GitHub",
      logo: github,
      className: "github-logo"
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>

      <h3 className="skills-subtitle">Technologies</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>

      <h3 className="skills-subtitle tools-subtitle">Tools</h3>
      <div className="skills-grid">
        {tools.map((tool, index) => (
          <div className="skill-card" key={index}>
            <img
              src={tool.logo}
              alt={tool.name}
              className={`skill-logo ${tool.className || ""}`}
            />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
