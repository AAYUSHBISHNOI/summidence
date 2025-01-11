import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/webp/footer-logo.png";
import ContactBusiness from "../Summidence/Contantus";
import cross from "../../assets/img/webp/Cross.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      document.body.classList.toggle(
        "overflow-hidden",
        newState && window.innerWidth < 1200
      );
      return newState;
    });
  };

  const toggleContactForm = () => {
    setShowContactForm((prev) => {
      document.body.classList.toggle("overflow-hidden", !prev);
      return !prev;
    });
  };

  const closeContactForm = () => {
    setShowContactForm(false);
    document.body.classList.remove("overflow-hidden");
  };

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setIsOpen(false);
        document.body.classList.remove("overflow-hidden");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="z-3 position-fixed top-0 w-100 bg-white">
      <div className="container custom_container">
        <div className="d-flex align-items-center justify-content-between py-2 bg-white">
          <a href="/">
            <img className="navbar_logo" src={logo} alt="Logo" />
          </a>
          <ul
            className={`d-flex flex-xl-row flex-column align-items-center mb-0 p-0 ${
              isOpen ? "open" : ""
            } gap-3 gap-xl-5 `}
          >
            <li className="mb-0 list-unstyled">
              <a
                onClick={toggleMenu}
                href="/"
                className={`ff_Poppins fw-medium position-relative text-decoration-none nav_link ${
                  isActive("/") ? "text-orange" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li className="mb-0 list-unstyled">
              <a
                onClick={toggleMenu}
                href="/Business"
                className={`ff_Poppins fw-medium position-relative text-decoration-none nav_link ${
                  isActive("/Business") ? "text-orange" : ""
                }`}
              >
                Business
              </a>
            </li>
            <li className="mb-0 list-unstyled">
              <a
                onClick={toggleMenu}
                href="/school"
                className={`ff_Poppins fw-medium position-relative text-decoration-none nav_link ${
                  isActive("/school") ? "text-orange" : ""
                }`}
              >
                Schools
              </a>
            </li>
            <li className="mb-0 list-unstyled">
              <a
                onClick={toggleMenu}
                href="/kids"
                className={`ff_Poppins fw-medium position-relative text-decoration-none nav_link ${
                  isActive("/kids") ? "text-orange" : ""
                }`}
              >
                Students
              </a>
            </li>
            <li className="mb-0 list-unstyled">
              <a
                onClick={toggleMenu}
                href="/about-us"
                className={`ff_Poppins fw-medium position-relative text-decoration-none nav_link ${
                  isActive("/about-us") ? "text-orange" : ""
                }`}
              >
                About us
              </a>
            </li>
            <Link
              to="/our-contact-us"
              className="common_bttn text-white ff_Poppins fw-normal fs_16 text-decoration-none"
            >
              Contact Us
            </Link>
            {/* <li className="list-unstyled">
              <button
                className="common_bttn text-white ff_Poppins fw-normal fs_16"
                onClick={toggleContactForm}
              >
                Contact Us
              </button>
            </li> */}
          </ul>
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

      {showContactForm && (
        <div className="contact-modal">
          <div className="contact-modal-content">
            <button onClick={closeContactForm} className="close-btn">
              <img src={cross} alt="" />
            </button>
            <ContactBusiness closeModal={closeContactForm} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
