import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // send form
  const sendEmail = (e) => {
    e.preventDefault();

    // Prevent empty fields
    if (!formData.from_name || !formData.from_email || !formData.message) {
      setStatus({ type: "error", message: "Please fill all fields." });
      return;
    }

    emailjs
      .send(
        "service_e41c03i",          
        "template_n30u3rq",        
        formData,
        "2StN1sIiFpV_LrXA9"         
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "Message sent successfully! I will get back to you soon.",
          });

          // clear form
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        () => {
          setStatus({
            type: "error",
            message: "Error sending message. Please try again.",
          });
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={sendEmail}>
        
        <label>
          Name
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formData.from_name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="from_email"
            placeholder="your@email.com"
            value={formData.from_email}
            onChange={handleChange}
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            placeholder="Type your message..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>

        <div className="contact-actions">
          <button className="send-btn" type="submit">
            Send Message
          </button>
        </div>

        {status.message && (
          <p className={`feedback ${status.type}`}>{status.message}</p>
        )}
      </form>
    </section>
  );
}
