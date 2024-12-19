import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import header_img from "../../assets/img/webp/Hero-img.jpeg";

const Header = () => {
  return (
    <>
      <Container className="mt_90 p-xl-0 z-3">
        <Row className="p-xl-0 align-items-center text-center text-lg-start">
          <Col lg={7} className="p-xl-0">
            <div>
              <h1 className="ff_Poppins mb-1 fw-semibold fs_48 lh_151 common_clr_blue">
                Increase your confidence and unleash your leadership potential
                through the power of public speaking.
              </h1>
              <p className="mb-2 fw-light fs_18 ff_Jakarta lh_215 para_summidence common_clr_black mt-md-1">
                Transform your presence, elevate your impact, and discover
                leadership abilities you never knew you had. At Summidence, we
                believe that mastering public speaking is the key that unlocks
                both personal growth and professional success.
              </p>
            </div>
          </Col>
          <Col lg={5} className="p-xl-0 mt-2 mt-md-4 mt-lg-0">
            <img
              className="header_img w-100 h-100"
              src={header_img}
              alt="Header"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
