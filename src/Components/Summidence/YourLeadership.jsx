import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AdvTech,
  Coaching,
  Confidence,
  RealWorld,
  Workshop,
} from "../common/Icon";

const YourLeadership = () => {
  return (
    <div className="mb-5 pb-md-5">
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center text-center">
          <h2 className="ff_Poppins fw-bold fs_48 common_clr_blue lh_132">
            Your Leadership Evolution Begins Here
          </h2>
          <p className="ff_Jakarta fs_20 fw-medium lh_132 common_clr_black para_nuture">
            The most successful leaders all share one common trait: the ability
            to communicate their vision with clarity, confidence, and charisma.
          </p>
        </div>
        <Row className=" justify-content-center d-xl-none">
          <Col
            md={4}
            className=" d-flex flex-column justify-content-center align-items-center"
          >
            <div className="card_you_leadership w-100 h-100">
              <Workshop />
              <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mb-0">
                Expert-led Workshops
              </p>
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0 mt-2">
                Practical speaking skills developed through hands-on training
                with industry experts
              </p>
            </div>
          </Col>
          <Col
            md={4}
            className=" d-flex flex-column justify-content-center align-items-center mt-3 mt-md-0"
          >
            <div className="card_you_leadership w-100 h-100">
              <Coaching />
              <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mb-0">
                Personalized Coaching
              </p>
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0 mt-2">
                One-on-one sessions tailored to your specific goals and
                leadership style
              </p>
            </div>
          </Col>
          <Col
            md={4}
            className=" d-flex flex-column justify-content-center align-items-center mt-3 mt-md-0"
          >
            <div className="card_you_leadership w-100 h-100">
              <RealWorld />
              <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mb-0">
                Real-world Practice
              </p>
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0 mt-2">
                Speaking opportunities in a supportive environment designed for
                growth
              </p>
            </div>
          </Col>
          <Col
            md={4}
            className=" d-flex flex-column justify-content-center align-items-center mt-3 mt-xl-0"
          >
            <div className="card_you_leadership w-100 h-100">
              <AdvTech />
              <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mb-0">
                Advanced Techniques
              </p>
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0 mt-2">
                Master the art of story telling and audience engagement through
                proven methodologies and contemporary techniques.
              </p>
            </div>
          </Col>
          <Col
            md={4}
            className=" d-flex flex-column justify-content-center align-items-center mt-3"
          >
            <div className="card_you_leadership w-100 h-100">
              <Confidence />
              <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mb-0">
                Confidence Building
              </p>
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0 mt-2">
                Learn effective strategies for managing speaking anxiety and
                building lasting confidence in your communication abilities.
              </p>
            </div>
          </Col>
        </Row>
        <div className=" d-none d-xl-block mt-4">
          <div className="d-flex justify-content-center gap-4">
            <div className="card_you_leadership w-100 h-100">
              <Workshop />
              <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mt-2 mb-0">
                Expert-led Workshops
              </p>
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0 mt-2">
                Practical speaking skills developed through hands-on training
                with industry experts
              </p>
            </div>
            <div className="card_you_leadership w-100 h-100">
              <Coaching />
              <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mt-2 mb-0">
                Personalized Coaching
              </p>
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0 mt-2">
                One-on-one sessions tailored to your specific goals and
                leadership style
              </p>
            </div>
            <div className="card_you_leadership w-100 h-100">
              <RealWorld />
              <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mt-2 mb-0">
                Real-world Practice
              </p>
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0 mt-2">
                Speaking opportunities in a supportive environment designed for
                growth
              </p>
            </div>
            <div className="card_you_leadership w-100 h-100">
              <AdvTech />
              <p className="ff_Poppins fw-semibold fs_16 lh_125 mt-2 common_clr_blue mb-0">
                Advanced Techniques
              </p>
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0 mt-2">
                Master the art of story telling and audience engagement through
                proven methodologies and contemporary techniques.
              </p>
            </div>
            <div className="card_you_leadership w-100 h-100">
              <Confidence />
              <p className="ff_Poppins fw-semibold fs_16 lh_125 common_clr_blue mt-2 mb-0">
                Confidence Building
              </p>
              <p className=" ff_Poppins fw-normal fs_14 common_clr_blue lh_140 mb-0 mt-2">
                Learn effective strategies for managing speaking anxiety and
                building lasting confidence in your communication abilities.
              </p>
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-center align-items-center mt-5">
          <button className="common_bttn text-white ff_Poppins fw-normal fs_16">
            Contact Us
          </button>
        </div>
      </Container>
    </div>
  );
};

export default YourLeadership;
