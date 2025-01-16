import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import leadership_img from "../../assets/img//Business/Img/Svg/Leadership-Development.svg";
import Team_img from "../../assets/img//Business/Img/Svg/Team-Performance.svg";
import Client_img from "../../assets/img//Business/Img/Svg/Client-Relationship.svg";

const HowItWorks = () => {
  return (
    <div className="sapce_how_business">
      <Container>
        <div className="text-center">
          <h2 className="ff_Poppins fw-semibold fs_48 lh_132 common_clr_blue mb-0">
            Why Communication is Your Competitive Edge
          </h2>
        </div>
        <Row className="justify-content-center text-center justify-content-lg-between mt-lg-5 pt-4">
          <Col
            md={6}
            lg={4}
            className="p-lg-0 d-flex justify-content-lg-center"
          >
            <div className="card_how w-100 h-100">
              <img src={leadership_img} alt="" />
              <p className="ff_Poppins fw-semibold lh_118 fs_24 common_clr_blue mb-0 mt-3">
                Leadership Development
              </p>
              <div className=" d-flex justify-content-center align-items-center">
                <ul className="ps-0 mb-0">
                  <li className="text-start ff_Poppins fs_14 fw-normal lh_118 text_clr_grey mb-0 mt-3">
                    Clear communication
                  </li>
                  <li className="text-start ff_Poppins fs_14 fw-normal lh_118 text_clr_grey mb-0 mt-1">
                    Reduce Conflicts
                  </li>
                  <li className="text-start ff_Poppins fs_14 fw-normal lh_118 text_clr_grey mb-0 mt-1">
                    Enhance Collaboration
                  </li>
                  <li className="text-start ff_Poppins fs_14 fw-normal lh_118 text_clr_grey mb-0 mt-1">
                    Improve virtual team performance
                  </li>
                  <li className="text-start ff_Poppins fs_14 fw-normal lh_118 text_clr_grey mb-0 mt-1">
                    Boost employee confidence
                  </li>
                </ul>
              </div>
              {/* <p className="ff_Poppins fs_14 fw-normal lh_118 text_clr_grey mb-0 mt-3">
                * Transform managers into influential
                <span className="d-block">leaders</span>
              </p> */}
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
            className="p-lg-0 d-flex justify-content-lg-center mt-3 mt-md-0"
          >
            <div className="card_how w-100 h-100">
              <img src={Team_img} alt="" />
              <p className="ff_Poppins fw-semibold lh_118 fs_24 common_clr_blue mb-0 mt-3">
                Team Performance
              </p>
              <p className="ff_Poppins fs_16 fw-normal lh_118 text_clr_grey mb-0 mt-2 pe-md-4">
                Accelerate outcomes through clear communication, reduce
                conflicts, enhance collaboration, improve virtual team
                performance, and boost employee confidence.
              </p>
            </div>
          </Col>
          <Col
            md={6}
            lg={4}
            className="p-lg-0 d-flex justify-content-lg-center mt-3 mt-lg-0"
          >
            <div className="card_how w-100 h-100">
              <img src={Client_img} alt="" />
              <p className="ff_Poppins fw-semibold lh_118 fs_24 common_clr_blue mb-0 mt-3">
                Customer Engagements
              </p>
              <div className=" d-flex justify-content-center align-items-center">
                <ul className="ps-0 mb-0">
                  <li className="text-start ff_Poppins fs_14 fw-normal lh_118 text_clr_grey mb-0 mt-3">
                    Delivery of impactful presentati
                  </li>
                  <li className="text-start ff_Poppins fs_14 fw-normal lh_118 text_clr_grey mb-0 mt-1">
                    Communicates complex ideas with clarity
                  </li>
                  <li className="text-start ff_Poppins fs_14 fw-normal lh_118 text_clr_grey mb-0 mt-1">
                    Handle difficult conversations confidently
                  </li>
                  <li className="text-start ff_Poppins fs_14 fw-normal lh_118 text_clr_grey mb-0 mt-1">
                    Win more sales pitches
                  </li>
                </ul>
              </div>
              {/* <p className="ff_Poppins fs_16 fw-normal lh_118 text_clr_grey mb-0 mt-2 pe-md-4">
                Win more pitches, strengthen client relationships, deliver
                impactful presentations, handle difficult conversations, and
                present complex ideas clearly.
              </p> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowItWorks;
