import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import founder_img from "../../assets/img/Aboutus/Png/Founder-Varun-Dewan.png";
import co_founder_img from "../../assets/img/Aboutus/Png/Co-Founder-Winnie-Woo.png";
import ContactBusiness from "../Summidence/Contantus";
import cross from "../../assets/img/webp/Cross.svg";

const Introduction = () => {
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
    <div className="space_introduction px-1">
      <Container>
        <Row className="pb-lg-5">
          <Col lg={4}>
            <div>
              <img
                className="w-100 h-100 img_about_us"
                src={founder_img}
                alt="founder_img"
              />
              <h2 className="fs_26 fw-bold ff_Poppins txt_clr_dark_blue lh_215 mb-0">
                Varun Dewan
              </h2>
              <p className=" ff_Poppins fs_16 fw-normal lh_175 text-black mb-0">
                Founder
              </p>
              <p className=" ff_Poppins fs_16 fw-normal lh_175 text-black mb-0 me-md-3">
                Varun Dewan brings a unique blend of technological expertise and
                communication mastery to Summidence. His innovative approach to
                public speaking training has revolutionized how people learn and
                master communication skills.
              </p>
            </div>
          </Col>
          <Col lg={8}>
            <div className="mt-md-4 mt-lg-0">
              <p className="fs_26 ff_Poppins fw-bold lh_175 txt_clr_dark_blue mb-2">
                Professional Achievement
              </p>
              <ul className="m-0 p-0 ps-4">
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Former Senior Technology Director at leading tech companies
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Winner of Asia Pacific Public Speaking Championship (2019)
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Featured speaker at Women in Leadership Summit (2018-2023)
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Executive Communication Coach for Fortune 500 companies
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  TEDx speaker with "Finding Your Voice in a World of Noise"
                </li>
              </ul>
              <p className="fs_26 ff_Poppins fw-bold lh_175 txt_clr_dark_blue mb-2 mt-3">
                Leadership & Impact
              </p>
              <ul className="m-0 p-0 ps-4">
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Mentored over 1,000 professionals in executive communication
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Pioneered "Speak to Lead" methodology for women in corporate
                  leadership
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Founded "Young Voices" initiative, helping underprivileged
                  youth develop communication skills
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Regular contributor to Leadership Today magazine
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Advisory board member for Women in Tech Asia
                </li>
              </ul>
              <p className="fs_26 ff_Poppins fw-bold lh_175 txt_clr_dark_blue mb-2 mt-3">
                Philosophy
              </p>
              <p className="fs_16 ff_Poppins fw-medium lh_175 txt_clr_dark_blue mb-2 mt-3">
                "Public speaking isn't just about the words we say – it's about
                discovering our authentic voice and using it to create positive
                change in the world. Every person has a unique story and
                perspective that deserves to be heard."
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-lg-5 mt-md-3 pt-5">
          <Col lg={4}>
            <div>
              <img
                className="w-100 h-100 img_about_us"
                src={co_founder_img}
                alt="co_founder_img"
              />
              <h2 className="fs_26 fw-bold ff_Poppins txt_clr_dark_blue lh_215 mb-0">
                Winnie Woo
              </h2>
              <p className=" ff_Poppins fs_16 fw-normal lh_175 text-black mb-0">
                Co-Founder
              </p>
              <p className=" ff_Poppins fs_16 fw-normal lh_175 text-black mb-0 me-md-3">
                Co-Founder & Chief Communication OfficerWith over a decade of
                experience in transforming lives through public speaking, Winnie
                Woo stands as a beacon of inspiration for aspiring speakers and
                leaders worldwide. Her journey embodies the very transformation
                that Summidence promises its clients.
              </p>
            </div>
          </Col>
          <Col lg={8}>
            <div className="mt-md-4 mt-lg-0">
              <p className="fs_26 ff_Poppins fw-bold lh_175 txt_clr_dark_blue mb-2">
                Professional Highlights
              </p>
              <ul className="m-0 p-0 ps-4">
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Former Senior Technology Director at leading tech companies
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Certified Professional Coach (ICF)
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black me-md-5 pe-md-4">
                  Creator of "TechSpeak" - a program helping technical
                  professionals communicate complex ideas simply
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  15+ years of experience in coaching public speaking across age
                  groups
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Pioneer in integrating technology with public speaking
                  training
                </li>
              </ul>
              <p className="fs_26 ff_Poppins fw-bold lh_175 txt_clr_dark_blue mb-2 mt-3">
                Innovation & Achievement
              </p>
              <ul className="m-0 p-0 ps-4">
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Developed Summidence's proprietary digital learning platform
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Led teams of 200+ technology professionals globally
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Featured speaker at Global Technology Leadership Summit
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Author of "Speak Tech: The Art of Technical Communication"
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Recipient of "Innovation in Education" award (2022)
                </li>
              </ul>
              <p className="fs_26 ff_Poppins fw-bold lh_175 txt_clr_dark_blue mb-2 mt-3">
                Teaching Impact
              </p>
              <ul className="m-0 p-0 ps-4">
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Coached over 2,000 students from ages 8 to 80
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Specialized programs for neurodiverse learners
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Created youth-focused STEM communication programs
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Mentored startup founders in pitch presentation
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_175 text-black">
                  Regular workshop leader at major tech conferences
                </li>
              </ul>
              <p className="fs_26 ff_Poppins fw-bold lh_175 txt_clr_dark_blue mb-2 mt-3">
                Philosophy
              </p>
              <p className="fs_16 ff_Poppins fw-medium lh_175 txt_clr_dark_blue mb-2 mt-3">
                "Technology and communication are the two greatest enablers of
                human potential. When we combine them effectively, we can create
                unprecedented opportunities for growth and success."Together,
                Building SummidenceWinnie and Varun's complementary strengths
                create the foundation of Summidence's unique approach to public
                speaking training.
              </p>
            </div>
          </Col>
        </Row>
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

export default Introduction;
