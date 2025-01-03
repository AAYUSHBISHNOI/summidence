import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ContactBusiness from "../Summidence/Contantus";
import cross from "../../assets/img/webp/Cross.svg";

const Jason = () => {
  const [isOpen, setIsOpen] = useState(false); // Track the menu state
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
    <>
      <Container className="space_jason">
        <div>
          <div className="text-center d-flex flex-column justify-content-center align-items-center">
            <h2 className="ff_Poppins fw-semibold fs_36 lh_118 common_clr_blue mb-0">
              Ready to elevate your confidence
              <span className="d-block common_clr_black">
                in communication and leadership journey?
              </span>
            </h2>
            <p className="ff_Poppins fw-medium para_jason fs_16 lh_140 common_clr_black mt-3 mb-md-5">
              Ready to unlock your true potential and master the art of speaking
              with confidence? Don’t wait any longer—take the first step today!
              Click now to sign up or contact us to learn more about our
              transformative speaking programs and how it can help you achieve
              your goals. Your journey to success starts here!
            </p>
          </div>
          <div className=" d-flex justify-content-center align-items-center mt-0">
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
        </div>
      </Container>
    </>
  );
};

export default Jason;
