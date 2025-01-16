import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Call, MessageEasy, MessageEmail } from "../common/Icon";

const EasyWAy = () => {
  return (
    <div className="bg_easy_way space_easy ">
      <Container>
        <h2 className=" ff_Poppins fs_48 fw lh_132 text-black text-center">
          3 easy ways to get in touch
        </h2>
        <Row className="mt-5 pt-lg-5 justify-content-center">
          <Col md={6} lg={4}>
            <div className=" d-flex flex-column align-items-center justify-content-center">
              <Call />
              <p className=" ff_Jakarta fs_26 fw-bold lh_125 text-black mt-3 mb-0">
                Call us on
              </p>
              <ul className=" d-flex align-items-center text-decoration-none pb-0 mb-0 mt-2">
                <li className="text-decoration-none list-unstyled ff_Jakarta fw-bold fs_26 common_clr_blue lh_132">
                  Varun Dewan :
                </li>
                <li className="text-decoration-none list-unstyled">
                  <a
                    href="tel:+04"
                    className="text-decoration-none ff_Jakarta fw-bold fs_26 common_clr_blue lh_132"
                  >
                    0469 571 891
                  </a>
                </li>
              </ul>
              <ul className=" d-flex align-items-center text-decoration-none pb-0 m-0">
                <li className="text-decoration-none list-unstyled ff_Jakarta fw-bold fs_26 common_clr_blue lh_132">
                  Winnie Woo :
                </li>
                <li className="text-decoration-none list-unstyled">
                  <a
                    href="tel:+04"
                    className="text-decoration-none ff_Jakarta fw-bold fs_26 common_clr_blue lh_132"
                  >
                    0411 896 887
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6} lg={4} className="mt-4 mt-md-0">
            <div className=" d-flex flex-column align-items-center justify-content-center text-center">
              <MessageEasy />
              <p className=" ff_Jakarta fs_26 fw-bold lh_125 text-black mt-3 mb-0">
                Fill out the
              </p>
              <ul className=" d-flex align-items-center text-decoration-none ps-0 pb-0 mb-0 mt-2">
                <li className="text-decoration-none list-unstyled">
                  <a
                    href="#contact_us"
                    className="text-decoration-none list-unstyled ff_Jakarta fw-bold fs_26 common_clr_blue lh_132"
                  >
                    contact form
                  </a>
                </li>
              </ul>
              <p className=" ff_Poppins fw-medium fs_18 lh_132 text-black w-75">
                Use the convenient message template below
              </p>
            </div>
          </Col>
          <Col md={6} lg={4} className="mt-4 mt-md-0">
            <div className=" d-flex flex-column align-items-center justify-content-center text-center">
              <MessageEmail />
              <p className=" ff_Jakarta fs_26 fw-bold lh_125 text-black mt-3 mb-0">
                Fill out the
              </p>
              <ul className=" d-flex align-items-center text-decoration-none ps-0 pb-0 mb-0 mt-2">
                <li className="text-decoration-none list-unstyled">
                  <a
                    href="mailto:info@summidence.com.au"
                    className="text-decoration-none list-unstyled ff_Jakarta fw-bold fs_26 common_clr_blue lh_132"
                  >
                    info@summidence.com.au
                  </a>
                </li>
              </ul>
              <p className=" ff_Poppins fw-medium fs_18 lh_132 text-black w-75">
                We are here to help you with your enquiry
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EasyWAy;
