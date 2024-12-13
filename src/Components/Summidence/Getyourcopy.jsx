import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image_one from "../../assets/img/webp/Imag-one.jpg";
import image_two from "../../assets/img/webp/image-two.jpg";
import image_three from "../../assets/img/webp/image-three.jpg";

const Getyourcopy = () => {
  return (
    <>
      <Container className="space_get">
        <div className=" d-flex flex-column justify-content-center align-items-center text-center">
          <h2 className="ff_Poppins fs_48 fw-semibold lh_125 common_clr_blue">
            The Summidence Difference
          </h2>
          <p className=" ff_Poppins fw-medium fs_16 lh_158 common_clr_black max_w_630">
            Our approach goes beyond traditional public speaking training. At
            Summidence, we don’t just teach you to speak, we help you discover a
            better version of yourself. Here’s how
          </p>
        </div>
        <Row className="d-flex justify-content-center justify-content-xl-start align-items-center align-items-xl-start mt-md-4">
          <Col md={6} lg={4} className="mt-3 mt-lg-0">
            <div className="common_card w-100 h-100">
              <img
                className="image_summidence object-fit-cover card_img_rds"
                src={image_one}
                alt=""
              />
              <div className="p-4">
                <h2 className="ff_Jakarta fw-semibold fs_24 text-white lh_125 mb-0">
                  Personalized Growth Journey
                </h2>
                <p className="ff_Poppins fw-medium fs_16 lh_151 text_clr_light_grey mt-3 mb-1">
                  Every leader’s voice is unique. We help you cultivate your
                  authentic speaking style so you can stand out while staying
                  true to yourself.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="mt-3 mt-lg-0">
            <div className="common_card w-100 h-100">
              <img
                className="image_summidence object-fit-cover card_img_rds "
                src={image_two}
                alt=""
              />
              <div className="p-4">
                <h2 className="ff_Jakarta fw-semibold fs_24 text-white lh_125 mb-0">
                  Practical Excellence
                </h2>
                <p className="ff_Poppins fw-medium fs_16 lh_151 text_clr_light_grey mt-3 mb-1">
                  Learn through action. Our interactive sessions offer
                  real-world speaking opportunities with constructive feedback
                  from experienced coaches and peers.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={4} className="mt-3 mt-lg-0">
            <div className="common_card w-100 h-100">
              <img
                className="image_summidence object-fit-cover card_img_rds "
                src={image_three}
                alt=""
              />
              <div className="p-4">
                <h2 className="ff_Jakarta fw-semibold fs_24 text-white lh_125 mb-0">
                  Lasting Transformation
                </h2>
                <p className="ff_Poppins fw-medium fs_16 lh_151 text_clr_light_grey mt-3 mb-1">
                  Witness your newfound confidence and communication skills
                  positively affect all aspects of your life—from leading
                  meetings to building stronger relationships.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Getyourcopy;
