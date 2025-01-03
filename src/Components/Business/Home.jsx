import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import header_img from "../../assets/img/Business/Img/Png/Bussiness-hero.jpeg";

const Home = () => {
  return (
    <div className="bg_about_us space_home">
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          <Col
            lg={6}
            className="d-flex justify-content-lg-end align-content-lg-end"
          >
            <div>
              <h1 className="ff_Poppins fw-semibold fs_54 lh_125 text-white mb-0">
                Invest in Your Most Valuable Asset. Transform Your Organization
                Through the Power of Public Speaking
              </h1>
              <p className="ff_Poppins fw-medium fs_16 lh_158 text-white mt-3 mb-0">
                In today's competitive business landscape, the ability to
                communicate effectively isn't just a soft skill – it's a
                critical driver of business success. At Summidence, we transform
                your teams into confident communicators who can articulate
                ideas, influence decisions, and drive results.
              </p>
            </div>
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0">
            <img
              className="w-100 h-100 img_business_hero object-fit-cover rounded-4"
              src={header_img}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
