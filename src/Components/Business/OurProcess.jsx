import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import assessment_img from "../../assets/img/Business/Img/Svg/Assessment.svg";
import customizetion_img from "../../assets/img/Business/Img/Svg/Customize.svg";
import Delivery_img from "../../assets/img/Business/Img/Svg/Delivery.svg";
import { Link } from "react-router-dom";

const OurProcess = () => {
  const [isOpen, setIsOpen] = useState(false); // Track the menu state

  return (
    <div className="my-5 pb-0 mb-lg-0">
      <Container>
        <h2 className=" ff_Poppins fw-bold fs_36 lh_140 common_clr_blue text-center">
          Our Implementation Process
        </h2>
        <Row className="justify-content-center justify-content-lg-between mt-lg-5 pt-4">
          <Col
            md={6}
            lg={4}
            className="p-lg-0 d-flex justify-content-lg-center"
          >
            <div className="card_how w-100 h-100">
              <img src={assessment_img} alt="" />
              <p className="ff_Poppins fw-semibold lh_118 fs_24 common_clr_blue mb-2 mt-3">
                Assessment
              </p>
              <ul className="m-0 ps-3 py-0">
                <li className="ff_Poppins fw-normal fs_16 lh_122 text_clr_grey mt-1">
                  Communication skills audit
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_122 text_clr_grey mt-1">
                  Team capability analysis
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_122 text_clr_grey mt-1">
                  Goals alignment
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_122 text_clr_grey mt-1">
                  Challenges evaluation
                </li>
              </ul>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
            className="p-lg-0 d-flex justify-content-lg-center mt-3 mt-md-0"
          >
            <div className="card_how w-100 h-100">
              <img src={customizetion_img} alt="" />
              <p className="ff_Poppins fw-semibold lh_118 fs_24 common_clr_blue mb-2 mt-3">
                Customization
              </p>
              <ul className="m-0 ps-3 py-0">
                <li className="ff_Poppins fw-normal fs_16 lh_122 text_clr_grey mt-1">
                  Program design
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_122 text_clr_grey mt-1">
                  Schedule optimization
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_122 text_clr_grey mt-1">
                  Content relevance
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_122 text_clr_grey mt-1">
                  ROI framework
                </li>
              </ul>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
            className="p-lg-0 d-flex justify-content-lg-center mt-3 mt-lg-0"
          >
            <div className="card_how w-100 h-100">
              <img src={Delivery_img} alt="" />
              <p className="ff_Poppins fw-semibold lh_118 fs_24 common_clr_blue mb-2 mt-3">
                Delivery
              </p>
              <ul className="m-0 ps-3 py-0">
                <li className="ff_Poppins fw-normal fs_16 lh_122 text_clr_grey mt-1">
                  Expert-led workshops
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_122 text_clr_grey mt-1">
                  Virtual/in-person options
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_122 text_clr_grey mt-1">
                  Practice sessions
                </li>
                <li className="ff_Poppins fw-normal fs_16 lh_122 text_clr_grey mt-1">
                  Ongoing support
                </li>
              </ul>
            </div>
          </Col>
        </Row>
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

export default OurProcess;
