import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Belajar = () => {
  return (
    <div>
      <Container className="space_belajar">
        <div className="text-center">
          <h2 className="ff_Poppins fs_48 fw-bold common_clr_blue lh_132">
            Our Impact on Student Success
          </h2>
          <p className="ff_Poppins fw-medium fs_16 lh_125 common_clr_black">
            Transforming Education Through Enhanced Communication Skills
          </p>
        </div>
        <Row className="justify-content-center mt-md-5 pt-md-2">
          <Col
            md={4}
            lg={2}
            className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0"
          >
            <div className="box_business_case d-flex justify-content-center align-items-center">
              <p className=" ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0">
                87%
              </p>
            </div>
            <p className=" ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3">
              Class Participation
            </p>
          </Col>
          <Col
            md={4}
            lg={2}
            className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0"
          >
            <div className="box_business_case d-flex justify-content-center align-items-center">
              <p className=" ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0">
                92%
              </p>
            </div>
            <p className=" ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3">
              Social Confidence
            </p>
          </Col>
          <Col
            md={4}
            lg={2}
            className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mt-md-0"
          >
            <div className="box_business_case d-flex justify-content-center align-items-center">
              <p className=" ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0">
                78%
              </p>
            </div>
            <p className=" ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3">
              Reduced Anxiety
            </p>
          </Col>
          <Col
            md={4}
            lg={2}
            className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mt-lg-0"
          >
            <div className="box_business_case d-flex justify-content-center align-items-center">
              <p className=" ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0">
                85%
              </p>
            </div>
            <p className=" ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3">
              Academic Performance
            </p>
          </Col>
          <Col
            md={4}
            lg={2}
            className="text-center d-flex flex-column justify-content-center align-items-center mt-4 mt-lg-0"
          >
            <div className="box_business_case d-flex justify-content-center align-items-center">
              <p className=" ff_Poppins fw-bold fs_36 lh_132 common_clr_blue mb-0">
                90%
              </p>
            </div>
            <p className=" ff_Poppins fs_14 fw-bold lh_125 common_clr_black mb-0 mt-3">
              Home Communication
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Belajar;
