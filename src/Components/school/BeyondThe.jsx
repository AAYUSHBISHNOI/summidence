import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import star_img from "../../assets/img/svg/Star.svg";
import { Arrow, College, FutureSuccess, LeaderShip } from "../common/Icon";

const BeyondThe = () => {
  return (
    <div className="my-md-5 py-5">
      <Container>
        <h2 className=" ff_Poppins text-center fs_48 fw-bold common_clr_blue lh_132">
          Beyond the Classroom
        </h2>
        <Row className="p-0 d-flex justify-content-center align-items-center mt-3 mt-md-5 gap-md-5">
          <Col
            md={4}
            lg={3}
            className="d-flex justify-content-center justify-content-lg-end p-0"
          >
            <div className="card_you_beyond w-100 h-100">
              <College />
              <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mt-2">
                University Readiness
              </p>
              <div className=" d-flex align-items-center mt-2 gap-2">
                <Arrow />
                <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0">
                  Interview preparation
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2 gap-2">
                <Arrow />
                <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0">
                  Academic presentations
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={4}
            lg={3}
            className="d-flex justify-content-center p-0 mt-3 mt-md-0"
          >
            <div className="card_you_beyond w-100 h-100">
              <LeaderShip />
              <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mt-2">
                Leadership Development
              </p>
              <div className=" d-flex align-items-center mt-2 gap-2">
                <Arrow />
                <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0">
                  Student leadership roles
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2 gap-2">
                <Arrow />
                <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0">
                  Extracurricular activities
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={4}
            lg={3}
            className="p-0 d-flex justify-content-center mt-3 mt-md-0"
          >
            <div className="card_you_beyond w-100 h-100">
              <FutureSuccess />
              <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mt-2">
                Future Success
              </p>
              <div className=" d-flex align-items-center mt-2 gap-2">
                <Arrow />
                <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0">
                  Career preparation
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2 gap-2">
                <Arrow />
                <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0">
                  Social interactions
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BeyondThe;
