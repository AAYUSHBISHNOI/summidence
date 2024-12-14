import React, { useState } from "react";
import logo from "../../assets/img/webp/footer-logo.png";
import ContactBusiness from "../Business/ContactBusiness";
import cross from "../../assets/img/webp/Cross.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track the menu state
  const [showContactForm, setShowContactForm] = useState(false); // Track the contact form visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state when the menu icon is clicked
    if (!isOpen) {
      document.body.classList.add("overflow-hidden"); // Prevent body scroll when menu is open
    } else {
      document.body.classList.remove("overflow-hidden"); // Allow body scroll when menu is closed
    }
  };

  const toggleContactForm = () => {
    setShowContactForm((prev) => !prev); // Toggle the contact form visibility
    document.body.classList.toggle("overflow-hidden", !showContactForm); // Prevent scrolling when form is open
  };

  return (
    <nav className="z-3 position-fixed top-0 w-100 bg-white">
      <div className="container custom_container w-100">
        <div className="d-flex align-items-center w-100 justify-content-between py-2">
          {/* Logo */}
          <a href="/">
            <img className="navbar_logo" src={logo} alt="Logo" />
          </a>
          {/* Navigation Links */}
          <ul
            className={`d-flex flex-xl-row flex-column align-items-center mb-0 p-0 ${
              isOpen ? "open" : ""
            } gap-3 gap-xl-5 `}
          >
            <li className="mb-0 list-unstyled">
              <a
                onClick={toggleMenu}
                href="/"
                className="ff_Poppins fw-medium position-relative text-decoration-none nav_link"
              >
                Home
              </a>
            </li>
            <li className="mb-0 list-unstyled">
              <a
                onClick={toggleMenu}
                href="/Business"
                className="ff_Poppins fw-medium position-relative text-decoration-none nav_link"
              >
                Business
              </a>
            </li>
            <li className="mb-0 list-unstyled">
              <a
                onClick={toggleMenu}
                href="/school"
                className="ff_Poppins fw-medium position-relative text-decoration-none nav_link"
              >
                School
              </a>
            </li>
            <li className="mb-0 list-unstyled">
              <a
                onClick={toggleMenu}
                href="/kids"
                className="ff_Poppins fw-medium position-relative text-decoration-none nav_link"
              >
                Students
              </a>
            </li>

            <li className="mb-0 list-unstyled">
              <a
                onClick={toggleMenu}
                href="about-us"
                className="ff_Poppins fw-medium position-relative text-decoration-none nav_link"
              >
                About us
              </a>
            </li>

            <li className="list-unstyled">
              <button
                className="common_bttn text-white ff_Poppins fw-normal fs_16"
                onClick={toggleContactForm}
              >
                Contact Us
              </button>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <button
            className="open d-block d-xl-none navicon"
            onClick={toggleMenu}
          >
            <div className={`menuicon ${isOpen ? "cross" : ""}`}></div>
            <div className={`menuicon my-2 ${isOpen ? "cross" : ""}`}></div>
            <div className={`menuicon ${isOpen ? "cross" : ""}`}></div>
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="contact-modal">
          <div className="contact-modal-content">
            <button
              onClick={() => setShowContactForm(false)}
              className="close-btn"
            >
              <img src={cross} alt="" />
            </button>
            <ContactBusiness closeModal={() => setShowContactForm(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
