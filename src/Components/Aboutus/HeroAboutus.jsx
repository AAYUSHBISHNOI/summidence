import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroAboutus = () => {
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
          <Link
            to="/our-contact-us"
            className="common_bttn text-white ff_Poppins fw-normal fs_16 text-decoration-none"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HeroAboutus;
