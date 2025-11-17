import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Janardhan Komerla • All Rights Reserved</p>

      <div className="footer-icons">
        <a href="https://github.com/JanardhanKomerla" target="_blank"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/janardhan-komerla-721296277/" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.instagram.com/_janardhan_komerla_?igsh=MWFzYmJ6b240cWt0Ng=="><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
}
