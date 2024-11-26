import React from "react";
import { Col, Row } from "react-bootstrap";
import footer_img from "../../assets/img/webp/footer-logo.png";
import Instagram from "../../assets/img/svg/Instagram.svg";
import Facebook from "../../assets/img/svg/Facebook.svg";
import Linkedin from "../../assets/img/svg/Linkedin.svg";
import TitterX from "../../assets/img/svg/TwitterX.svg";
import Youtube from "../../assets/img/svg/Youtube.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer_container mx-auto px-4">
        <Row className="space_row d-flex justify-content-between">
          <Col lg={3}>
            <a href="/">
              <img
                className="footer_img w-100"
                src={footer_img}
                alt="footer-img"
              />
            </a>
            <div className="gap-3 d-flex align-items-center mt-sm-4 mt-2 pt-1 justify-content-lg-center">
              <a
                href="https://www.instagram.com/"
                className="footer_social_icon d-flex align-items-center justify-content-center"
              >
                <img src={Instagram} alt="instagram" />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                className="footer_social_icon d-flex align-items-center justify-content-center"
              >
                <img src={Linkedin} alt="linkedin" />
              </a>
              <a
                href="https://www.youtube.com/"
                className="footer_social_icon d-flex align-items-center justify-content-center"
              >
                <img src={Youtube} alt="youtube" />
              </a>
              <a
                href="https://x.com/?lang=en"
                className="footer_social_icon d-flex align-items-center justify-content-center"
              >
                <img src={TitterX} alt="TwiterX" />
              </a>
              <a
                href="https://www.facebook.com/"
                className="footer_social_icon d-flex align-items-center justify-content-center"
              >
                <img src={Facebook} alt="Facebook" />
              </a>
            </div>
          </Col>
          <Col
            lg={3}
            md={4}
            sm={5}
            className="d-flex justify-content-sm-between gap-4 mt-4 mt-lg-0 "
          >
            <ul className="p-0 m-0">
              <li className="mb-0 list-unstyled">
                <a
                  href="/"
                  className="ff_Poppins footer_link fw-medium fs_24 common_clr_black lh_140"
                >
                  Jason’s Story
                </a>
              </li>
              <li className="mt-md-4 mt-3 list-unstyled">
                <a
                  href="/"
                  className="ff_Poppins footer_link fw-medium fs_24 common_clr_black lh_140"
                >
                  Speaking
                </a>
              </li>
              <li className="mt-md-4 mt-3 list-unstyled">
                <a
                  href="/"
                  className="ff_Poppins footer_link fw-medium fs_24 common_clr_black lh_140"
                >
                  Books
                </a>
              </li>
              <li className="mt-md-4 mt-3 list-unstyled">
                <a
                  href="/"
                  className="ff_Poppins footer_link fw-medium fs_24 common_clr_black lh_140"
                >
                  Books
                </a>
              </li>
            </ul>
            <ul className="m-0 p-0">
              <li className="m-0 p-0 list-unstyled">
                <a
                  href="/"
                  className="ff_Poppins footer_link fw-medium fs_24 common_clr_black lh_140"
                >
                  Mentorship
                </a>
              </li>
              <li className="m-0 p-0 mt-md-4 mt-3 list-unstyled">
                <a
                  href="/"
                  className="ff_Poppins footer_link fw-medium fs_24 common_clr_black lh_140"
                >
                  Media
                </a>
              </li>
              <li className="m-0 p-0 mt-md-4 mt-3 list-unstyled">
                <a
                  href="/"
                  className="ff_Poppins footer_link fw-medium fs_24 common_clr_black lh_140"
                >
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={5} sm={6} xl={4} className="ps-0 mt-4 mt-lg-0">
            <h2 className="ff_Poppins fw-semibold fs_28 lh_132">
              How can I empower you to live with conviction?
            </h2>
            <p className="ff_Poppins fw-medium fs_24 lh_132">
              Ask me a question, tell me your story, or share your feedback.
            </p>
            <button className=" ff_Poppins fw-medium fs_28 lh_140 mb-0 text-black newsletter_btn w-100">
              Subscribe to Newsletter
            </button>
          </Col>
        </Row>
      </div>
      <div className="bg_orange py-3">
        <div className="footer_container mx-auto px-3 my-1">
          <div className="d-flex align-items-center justify-content-between flex-md-row flex-column gap-1">
            <p className="ff_Poppins fw-medium fs_24 lh_151 text-white mb-0">
              © {currentYear} Summidence. All rights reserved
            </p>
            <ul className="d-flex align-items-center gap-md-5 gap-4 mb-0">
              <li className=" ff_Poppins fw-medium fs_24 lh_151 text-white mb-0">
                Terms of service
              </li>
              <li className=" ff_Poppins fw-medium fs_24 lh_151 text-white mb-0">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
