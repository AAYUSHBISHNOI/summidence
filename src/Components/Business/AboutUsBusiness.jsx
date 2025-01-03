import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import man_img from "../../assets/img/Business/Img/Png/About-us.jpeg";
import card_img from "../../assets/img/Business/Img/Png/graph-img.png";
import executive_img from "../../assets/img/Business/Img/Svg/Executive-Leadership.svg";
import Management_img from "../../assets/img/Business/Img/Svg/Management-Development.svg";
import sales_img from "../../assets/img/Business/Img/Svg/Sales-Client.svg";

const AboutUsBusiness = () => {
  return (
    <div className="space_about_us">
      <Container>
        <Row className="align-items-lg-center">
          <Col lg={6}>
            <h2 className="ff_Poppins fw-semibold fs_36 lh_125 common_clr_blue mb-0 text-center text-lg-start">
              The Summidence Corporate Advantage
            </h2>
            <p className="ff_Poppins fs_16 fw-normal lh_118 text_clr_grey mb-0 mt-2 pe-md-5 me-md-5 text-center text-lg-start">
              At Summidence, we deliver tailored solutions to empower
              professionals at all levels with essential communication skills
              for success.
            </p>
            <div className="mt-5 text-center text-md-start">
              <div className="d-md-flex align-items-center gap-4">
                <img src={executive_img} alt="" />
                <div>
                  <p className="ff_Poppins fw-medium fs_20 lh_118 common_clr_blue mb-0">
                    Executive Leadership Program
                  </p>
                  <p className="ff_Poppins fw-normal fs_16 text_clr_grey lh_151 mb-0 mt-2">
                    This program enhances executive skills with coaching,
                    <span className="d-md-block">
                      presence development, presentation mastery, media
                    </span>
                    training, and board communication strategies.
                  </p>
                </div>
              </div>
              <div className="d-md-flex align-items-center gap-4 mt-4 pt-3">
                <img src={Management_img} alt="" />
                <div>
                  <p className="ff_Poppins fw-medium fs_20 lh_118 common_clr_blue mb-0">
                    Management Development
                  </p>
                  <p className="ff_Poppins fw-normal fs_16 text_clr_grey lh_151 mb-0 mt-2">
                    We train managers in team communication,
                    <span className=" d-md-block">
                      presentation mastery, influence techniques, virtual
                    </span>
                    engagement, and change communication.
                  </p>
                </div>
              </div>
              <div className="d-md-flex align-items-center gap-4 mt-4 pt-3">
                <img src={sales_img} alt="" />
                <div>
                  <p className="ff_Poppins fw-medium fs_20 lh_118 common_clr_blue mb-0">
                    Sales and Client-Facing Teams
                  </p>
                  <p className="ff_Poppins fw-normal fs_16 text_clr_grey lh_151 mb-0 mt-2">
                    Our sales team programs cover pitch mastery, client
                    <span className=" d-md-block">
                      presentations, negotiation, virtual selling, and
                    </span>
                    storytelling.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mt-4">
            <div className="position-relative">
              <img className="w-100 h-100 rounded-4" src={man_img} alt="" />
              <img
                className="w-100 position-absolute card_img_about_us z-1"
                src={card_img}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsBusiness;
