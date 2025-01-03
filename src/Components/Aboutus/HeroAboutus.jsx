import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ContactBusiness from "../Summidence/Contantus";
import cross from "../../assets/img/webp/Cross.svg";

const HeroAboutus = () => {
  const [showContactForm, setShowContactForm] = useState(false); // Track the contact form visibility

  const toggleContactForm = () => {
    setShowContactForm((prev) => {
      const newState = !prev;
      // Add or remove the 'overflow-hidden' class based on the new state
      if (newState) {
        document.body.classList.add("overflow-hidden"); // Prevent scrolling when form is open
      } else {
        document.body.classList.remove("overflow-hidden"); // Allow scrolling when form is closed
      }
      return newState;
    });
  };

  const closeContactForm = () => {
    setShowContactForm(false); // Close the modal
    document.body.classList.remove("overflow-hidden"); // Ensure class is removed when closing the modal
  };
  return (
    <div className="bg_about_us">
      <Container className="space_aboutus">
        <div className="text-center d-flex justify-content-center flex-column align-items-center">
          <p className="ff_Poppins fw-light fs_16 lh_132 txt_clr_orange mb-0">
            Meet Our Founders
          </p>
          <h1 className="ff_Poppins fw-bold fs_72 lh_122 text-white mt-2 mt-md-4 mb-0">
            The Leadership Communicators Behind Summidence
          </h1>
          <p className="ff_Poppins fw-light fs_24 lh_118 text-white mb-0 mt-2 mt-md-4 para_aboutus">
            Our founders combine their unique strengths in leadership, public
            speaking, technology, and education to create transformative
            communication experiences that empower individuals at every stage of
            life.
          </p>
        </div>
        <div className=" d-flex justify-content-center align-items-center mt-5">
          <button
            className="common_bttn text-white ff_Poppins fw-normal fs_16"
            onClick={toggleContactForm}
          >
            Contact Us
          </button>
        </div>
        {/* Contact Form Modal */}
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
      </Container>
    </div>
  );
};

export default HeroAboutus;
