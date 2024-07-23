import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tewfjyn", // replace with your EmailJS service ID
        "template_x4vd7gn", // replace with your EmailJS template ID
        formData,
        "EFUnJQjHZ6pIo7bGh" // replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="container my-5 py-5 text-center" id="contactme">
      <h3 className="mt-3 py-5">
        Contact <span>Me</span>!!
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="row g-3 align-items-center justify-content-center">
          <div className="col-5 col-lg-3">
            <input
              type="text"
              className="formControl"
              placeholder="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              aria-label="First name"
              required
            />
          </div>
          <div className="col-5 col-lg-3">
            <input
              type="text"
              className="formControl"
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              aria-label="Last name"
              required
            />
          </div>
        </div>
        <div className="row g-3 align-items-center pt-3 justify-content-center">
          <div className="col-5 col-lg-3">
            <input
              type="tel"
              className="formControl"
              placeholder="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              aria-label="Mobile"
              required
            />
          </div>
          <div className="col-5 col-lg-3">
            <input
              type="email"
              className="formControl"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Email"
              required
            />
          </div>
        </div>
        <div className="row g-3 pt-3 align-items-center justify-content-center">
          <div className="col-10 col-lg-6">
            <textarea
              className="formControl"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              aria-label="Message"
              rows="10"
              required
            />
          </div>
        </div>
        <button type="submit" className="button mt-5">
          Send Message🫣
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
