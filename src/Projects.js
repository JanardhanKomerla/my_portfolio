import React from "react";
import "./Projects.css";
import expense_tracker from "./assets/images/expense-tracker.jpg";
import quiz from "./assets/images/quiz.jpg";
import student_management from "./assets/images/student_management.jpg";
import spam_sms from "./assets/images/spam_sms.webp"

const projects = [
  {
    title: "Expense_Tracker",
    desc: "A full-stack e-commerce solution with real-time inventory, secure payments, and analytics dashboard.",
    image: expense_tracker,
    tags: ["React", "HTML5", "CSS3", "JavaScript"],
    demo: "https://janardhankomerla.github.io/Expenses_Tracker/",
    code: "https://github.com/JanardhanKomerla/Expenses_Tracker",
  },
  {
    title: "Quiz_Application",
    desc: "A basic quiz app for quick questions and answers.",
    image: quiz,
    tags: ["JavaScript", "HTML5", "CSS3"],
    demo: "https://janardhankomerla.github.io/Quiz_Application/",
    code: "https://github.com/JanardhanKomerla/Quiz_Application",
  },
  {
    title: "Student_Management_System",
    desc: "A simple system to create, read, update, and delete student records.",
    image: student_management,
    tags: ["JavaScript", "HTML5", "CSS3"],
    demo: "https://janardhankomerla.github.io/student-management-system/",
    code: "https://github.com/JanardhanKomerla/student-management-system",
  },
  {
    title: "Spam_SMS_Detection",
    desc: "A system that detects spam SMS messages.It analyzes text patterns using machine learning.Helps filter unwanted messages accurately.",
    image: spam_sms,
    tags: ["Python", "CSS", "HTML"],
    demo: "https://github.com/JanardhanKomerla/Spam_SMS_Detection",
    code: "https://github.com/JanardhanKomerla/Spam_SMS_Detection",
  },
];

export default function Projects() {
  return (
    <section className="projects-grid-section" id ="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <img src={p.image} alt={p.title} className="project-img" />

            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="project-tags">
                {p.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={p.demo} target="_blank" className="btn demo-btn">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a href={p.code} target="_blank" className="btn code-btn">
                  <i className="fab fa-github"></i> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
